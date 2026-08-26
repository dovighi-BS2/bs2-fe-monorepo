import { Component, computed, contentChildren, effect, input, signal } from '@angular/core';
import { Bs2DSStepComponent } from '../bs2-ds-step/bs2-ds-step.component';
import { Bs2DSStepperItemComponent } from '../bs2-ds-stepper-item/bs2-ds-stepper-item.component';

@Component({
  selector: 'bs2-ds-stepper',
  imports: [Bs2DSStepperItemComponent],
  templateUrl: './bs2-ds-stepper.component.html',
  styleUrl: './bs2-ds-stepper.component.scss',
  host: { '[class.horizontal]': 'horizontal()' },
})
export class Bs2DSStepperComponent {
  private readonly _steps = contentChildren(Bs2DSStepComponent);

  public readonly currentIndex = signal(0);

  public readonly steps = computed(() =>
    this._steps().map(s => ({
      label: s.label(),
      title: s.title(),
      description: s.description(),
      hasError: s.hasError(),
    }))
  );

  public readonly horizontal = input<boolean>(false);
  public readonly gap = input<number | null>(null);

  constructor() {
    effect(() => {
      const idx = this.currentIndex();
      this._steps().forEach((step, i) => step.active.set(i === idx));
    });
  }

  public next(): void {
    this.currentIndex.update(i => Math.min(i + 1, this._steps().length - 1));
  }

  public prev(): void {
    this.currentIndex.update(i => Math.max(i - 1, 0));
  }
}
