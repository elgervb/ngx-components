import { Component, OnInit, ViewChild, ViewContainerRef, HostListener } from '@angular/core';
import { ActiveModal } from '../../services/active.modal';

@Component({
  selector: 'evb-modal',
  template: `
    <evb-backdrop (click)="close()"></evb-backdrop>
    <aside class="modal">
      <ng-template #contentHost></ng-template>
    </aside>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // tslint:disable-next-line no-any
  @ViewChild('contentHost', { read: ViewContainerRef }) contentHost: ViewContainerRef;

  constructor(private activeModal: ActiveModal) { }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.close();
  }

  ngOnInit() {
    //
  }

  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.close();
  }
}
