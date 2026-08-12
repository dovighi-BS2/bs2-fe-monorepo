import { Component, ViewEncapsulation, computed, input } from '@angular/core';
import { Bs2DSIconComponent } from '../../../bs2-ds-icon/src/bs2-ds-icon/bs2-ds-icon.component';

@Component({
  selector: 'bs2-ds-stepper-item',
  imports: [Bs2DSIconComponent],
  templateUrl: './bs2-ds-stepper-item.component.html',
  styleUrl: './bs2-ds-stepper-item.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: { '[class.horizontal]': 'horizontal()' },
})
export class Bs2DSStepperItemComponent {
  public readonly label = input<string>();
  public readonly title = input<string>();
  public readonly description = input<string>();
  public readonly hasError = input<boolean>(false);
  public readonly index = input<number>(0);
  public readonly indexOfCurrent = input<number>(-1);
  public readonly horizontal = input<boolean>(false);

  public readonly isError = computed(() => this.hasError());
  public readonly isDone = computed(() => !this.isError() && this.indexOfCurrent() > this.index());
  public readonly isDoing = computed(() => !this.isError() && this.indexOfCurrent() === this.index());
  public readonly isDefault = computed(() => !this.isDone() && !this.isDoing() && !this.isError());
}
