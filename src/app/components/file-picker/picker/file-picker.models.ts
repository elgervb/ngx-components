export interface UploadedFile {
  file: File;
  content: string;
}

export interface FilepickerOptions {
  mimeType: string;
  maxFiles: number;
  maxSize: number;
}

export class DefaultSettings implements FilepickerOptions {
  mimeType = 'image.*';
  maxFiles: 100;
  maxSize: 10000000; // 10MB
}
