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
