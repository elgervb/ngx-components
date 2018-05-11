export interface UploadedFile {
  file: File;
  content: string;
}

export interface FilepickerOptions {
  mimeType: string;
  maxFiles: number;
  maxSize: number;
}

// tslint:disable no-magic-numbers
export class DefaultSettings implements FilepickerOptions {
  mimeType = 'image.*';
  maxFiles: 100;
  maxSize: 10000000; // 10MB
}
// tslint:enable no-magic-numbers
