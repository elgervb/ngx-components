import { Component, ViewChild, OnInit } from '@angular/core';
import { filter } from './components/list';
import { WizardComponent } from './components/wizard/wizard/wizard.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'evb-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild(WizardComponent) wizard: WizardComponent;
  proceed = false;
  form: FormGroup;
  listItemsObj = [
    {
      name: 'item 1',
      data: 'asdf'
    }, {
      name: 'item 2',
      data: 'asdf'
    }, {
      name: 'item 3',
      data: 'qwer'
    }
    , {
      name: 'item 4',
      data: 'qwer'
    }
  ];

  filteredItems: ListItem[] = this.listItemsObj;

  donut = {
    thickness: 10,
    progress: 40,
    diameter: 240,
    invertDirection: false,
    showText: false
  };

  progressbar = {
    progress: 20
  };

  constructor(private builder: FormBuilder) { }

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

  toggleProceed() {
    this.proceed = !this.proceed;
  }


}

interface ListItem {
  name: string;
  data: string;
}
