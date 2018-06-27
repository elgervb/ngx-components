import { Injectable, ComponentRef } from '@angular/core';
import { ModalComponent } from '../components';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class ModalStackService {

  constructor(private modalService: ModalService) { }

  close<T extends ModalComponent>(modal: ComponentRef<T>) {
    this.modalService.close(modal);
  }

}
