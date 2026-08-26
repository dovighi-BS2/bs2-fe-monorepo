import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'bs2-ds-step',
  imports: [],
  template: '<ng-content />',
  host: { '[style.display]': 'active() ? "" : "none"' },
})
export class Bs2DSStepComponent {
  public readonly label = input<string>();
  public readonly title = input<string>();
  public readonly description = input<string>();
  public readonly hasError = input<boolean>(false);

  /** Controlled by the parent Bs2DSStepperComponent */
  public readonly active = signal(false);
}
