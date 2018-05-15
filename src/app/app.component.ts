import { Component, ViewChild } from '@angular/core';
import { WizardComponent } from './components/wizard/wizard/wizard.component';

@Component({
  selector: 'evb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild(WizardComponent) wizard: WizardComponent;
  proceed = false;

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

  handleClick(arg: string) {
    console.log('clicked button', event.target);
  }

  toggleProceed() {
    this.proceed = !this.proceed;
  }
}
