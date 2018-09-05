import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

import { UploadedFile } from '../file-picker.models';

import { FileProgress } from './fileprogress';

@Component({
  selector: 'evb-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent implements OnInit {

  // TODO error handling while reading a file
  // TODO configure with options (mime type, max files, max size, max size per file, etc)
  // TODO validation messages
  // TODO remove picked file
  // TODO paste from clipboard

  @Input() multiple = false;
  @Output() readonly pick = new EventEmitter<UploadedFile>();

  @ViewChild('filePicker') filePicker: ElementRef<HTMLInputElement>;
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
    this.dragover = false;
    return false;
  }

  constructor() { }

  ngOnInit() { }

  onChange() {
    const fileElement = this.filePicker.nativeElement;
    if (fileElement.files && fileElement.files.length > 0) {
      this.pickFiles(fileElement.files);
    }
  }

  deleteFile(file: UploadedFile): void {
    const index = this.files.indexOf(file);

    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  getProgress() {
    let progress = 0;
    this.fileProgress.forEach(value => progress += value.progress);
    return Math.round(progress / this.fileProgress.size);
  }

  pickFiles(files: FileList) {
    for (const file of files) {
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
    // tslint:disable-next-line no-any
    const error: DOMException = (event.target as any).error;
    switch (error.code) {
      case error.NOT_FOUND_ERR:
        throw new Error(`File ${file.name} could not be found`);
      // tslint:disable-next-line no-any
      case (error as any).NOT_READABLE_ERR:
        throw new Error(`File ${file.name} is not readable`);
      case error.ABORT_ERR:
        break; // noop
      default:
        throw new Error(`An error occurred reading file ${file.name}.`);
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

    this.pick.emit(pickedFile);
  }

  private handleProgress(file: File, event: ProgressEvent) {
    if (event.lengthComputable) {
      const progress = this.fileProgress.get(file);
      progress.update(event.loaded);
    }
  }
}
