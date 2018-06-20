import { Component, ViewChild, OnInit, ComponentRef } from '@angular/core';
import { filter } from './components/list';
import { WizardComponent } from './components/wizard/wizard/wizard.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BrushType } from './components/drawing';
import { DrawComponent } from './components/drawing/draw/draw.component';
import { ModalService } from './components/modal/services/modal.service';
import { ModalComponent } from './components/modal/components';
import { TestComponent } from './components/modal/test/test.component';

@Component({
  selector: 'evb-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild(WizardComponent) wizard: WizardComponent;
  @ViewChild(DrawComponent) drawCanvas: DrawComponent;

  proceed = false;
  form: FormGroup;
  listItemsObj = [
    {
      name: 'item 1',
      data: 'asdf'
    },
    {
      name: 'item 2',
      data: 'asdf'
    },
    {
      name: 'item 3',
      data: 'qwer'
    },
    {
      name: 'item 4',
      data: 'qwer'
    }
  ];

  filteredItems: ListItem[] = this.listItemsObj;

  donut: DonutModel = {
    thickness: 30,
    progress: 40,
    diameter: 240,
    invertDirection: false,
    showText: true
  };

  progressbar = {
    progress: 20
  };

  brushType = BrushType;

  private modal: ComponentRef<ModalComponent>;

  constructor(private builder: FormBuilder, private modalService: ModalService) { }

  ngOnInit() {
    this.form = this.builder.group({
      test1: [''],
      test2: [''],
      test3: ['']
    });
  }

  handleClick(arg: string) {
    console.log('clicked button', event.target);
  }

  onFilter(filterStr: string) {
    this.filteredItems = this.listItemsObj.filter(item => filter(item, filterStr));
  }

  cancel() {
    this.form.reset();
  }

  submit(value: { test1: string, test2: string }) {
    console.log('Form submitted', value);
  }

  closeModal() {
    this.modalService.close(this.modal);
  }

  openModal() {
    this.modal = this.modalService.open(ModalComponent);
    this.modal.instance.setComponent(TestComponent);
    // this.modal.instance.component = DrawComponent;
  }

  toggleProceed() {
    this.proceed = !this.proceed;
  }

  setBrushType(type: BrushType) {
    this.drawCanvas.setBrush(type);
  }
}

interface ListItem {
  name: string;
  data: string;
}
