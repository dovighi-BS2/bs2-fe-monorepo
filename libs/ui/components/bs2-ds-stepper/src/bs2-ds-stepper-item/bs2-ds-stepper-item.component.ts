import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'bs2-ds-stepper-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './bs2-ds-stepper-item.component.html',
  styleUrl: './bs2-ds-stepper-item.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Bs2DSStepperItemComponent {
  @Input() public step: string;
  @Input() public label: string;
  @Input() public title: string;
  @Input() public description: string;
  @Input() public hasError: boolean = false;
  @Input() public index: number = 0;
  @Input() public indexOfCurrent: number = -1;

  public get isDefault(): boolean {
    return !this.isDone && !this.isDoing && !this.isError;
  }

  public get isDone(): boolean {
    return !this.isError && this.indexOfCurrent > this.index;
  }

  public get isDoing(): boolean {
    return !this.isError && this.indexOfCurrent === this.index;
  }

  public get isError(): boolean {
    return this.hasError;
  }
}
