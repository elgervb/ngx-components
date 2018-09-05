import { AfterContentInit, Component, ElementRef, Input, OnInit } from '@angular/core';

const MIN_RANDOM = 100000;
const MAX_RANDOM = 999999;

@Component({
  selector: 'evb-formcontrol',
  template: `
    <label [for]="id" *ngIf="label"> {{label}} </label>
    <ng-content></ng-content>
  `,
  styleUrls: [
    './formcontrol.component.scss',
    './formcontrol.component.color.scss',
    './formcontrol.component.range.scss'
  ]
})
export class FormControlComponent implements OnInit, AfterContentInit {

  @Input() label?: string;

  /**
   * Random id to couple the label and the input together
   */
  id?: string;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    //
  }

  ngAfterContentInit() {
    const host: HTMLElement = this.hostElement.nativeElement;
    const inputElement = host.querySelector('input');

    if (this.label && inputElement && !inputElement.hasAttribute('id')) {
      this.id = `label-${this.getRandomNumber(MIN_RANDOM, MAX_RANDOM)}`;
      inputElement.setAttribute('id', this.id);
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
