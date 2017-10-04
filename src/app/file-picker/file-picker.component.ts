import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'evb-file-picker',
  template: `
    <input #filePicker type="file" id="filePicker" (change)="onChange()" required [multiple]="multiple" class="form-control" />
    <div class="filepicker__progress">
      <div class="filepicker__progress__inner"[style.width.%]="getProgress()"></div>
    </div>
    <div class="filepicker__picker">
      <label for="filePicker">Pick a file</label>
      <ul class="filepicker__list">
        <li class="filepicker__list__item" *ngFor="let file of files">{{file.file.name}}</li>
      </ul>
    </div>
    <div class="filepicker__thumbs">
      <div *ngFor="let file of files" class="filepicker__thumbs__placeholder">
        <img [src]="file.content" alt="{{file.file.name}}" title="{{file.file.name}}" class="filepicker__thumb" />
      </div>
    </div>
  `,
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {

  // TODO error handling while reading a file
  // TODO configure with options (mime type, max files, max size, max size per file, etc)
  // TODO validation messages
  // TODO remove picked file
  // TODO paste from clipboard

  @Input() multiple = false;
  @Output() onPick = new EventEmitter<UploadedFile>();

  @ViewChild('filePicker') filePicker;
  @HostBinding('class.filepicker') cssClass = true;

  fileProgress = new Map<File, FileProgress>();

  files: UploadedFile[] = [];

  @HostBinding('class.dragover') dragover = false;

  @HostListener('dragover', ['$event']) ondragover(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'copy';
    }
    this.dragover = true;

    return false;
  }

  @HostListener('drop', ['$event']) ondrop(event: DragEvent) {

    this.pickFiles(event.dataTransfer.files);
    return false;
  }

  constructor() { }

  ngOnInit() { }

  onChange() {
    const fileElement = this.filePicker.nativeElement as HTMLInputElement;
    if (fileElement.files && fileElement.files.length > 0) {
      this.pickFiles(fileElement.files);
    }
  }

  getProgress() {
    let progress = 0;
    this.fileProgress.forEach((value) => progress += value.progress);
    return Math.round(progress / this.fileProgress.size);
  }

  pickFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file.type.match('image.*')) {
        continue;
      }

      // update progress
      this.fileProgress.set(file, new FileProgress(file));

      const reader = new FileReader();
      reader.onload = this.handleFile.bind(this, file);
      reader.onprogress = this.handleProgress.bind(this, file);
      reader.onerror = this.handleError.bind(this, file);
      reader.readAsDataURL(file);
    }
  }

  private handleError(file: File, event: ErrorEvent) {
    const error: DOMException = (event.target as any).error;
    switch (error.code) {
      case error.NOT_FOUND_ERR:
        throw new Error('File ${file.name} could not be found');
      case (error as any).NOT_READABLE_ERR:
        throw new Error('File ${file.name} is not readable');
      case error.ABORT_ERR:
        break; // noop
      default:
        throw new Error('An error occurred reading file ${file.name}.');
    }
  }

  private handleFile(file: File, event: Event) {
    // make sure to update progress to 100%
    const progress = this.fileProgress.get(file);
    progress.update(file.size);

    const reader = event.target as FileReader;
    const pickedFile = {
      file,
      content: reader.result
    };

    this.files.push(pickedFile);

    this.onPick.emit(pickedFile);
  }

  private handleProgress(file: File, event: ProgressEvent) {
    if (event.lengthComputable) {
      const progress = this.fileProgress.get(file);
      progress.update(event.loaded);
    }
  }
}

export interface UploadedFile {
  file: File;
  content: string;
}

/**
 * Keeps track of the file read progress
 */
export class FileProgress {

  private bytesRead = 0;

  constructor(private file: File) { }

  update(read: number) {
    this.bytesRead = read;
  }

  get progress() {
    return Math.round((this.bytesRead / this.file.size) * 100);
  }
}
