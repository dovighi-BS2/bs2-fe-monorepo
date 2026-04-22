import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Bs2DSStepperItemComponent } from '../bs2-ds-stepper-item/bs2-ds-stepper-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bs2-ds-stepper',
  standalone: true,
  imports: [Bs2DSStepperItemComponent, CommonModule],
  templateUrl: './bs2-ds-stepper.component.html',
  styleUrl: './bs2-ds-stepper.component.scss',
})
export class Bs2DSStepperComponent {
  @Input() items: Bs2DSStepperItemComponent[] = [];
  @Input() public horizontal: boolean = false;

  @ContentChildren(Bs2DSStepperItemComponent)
  set projectedItems(value: QueryList<Bs2DSStepperItemComponent>) {
    if (value && value.length) this.items = value.toArray();
  }
}
