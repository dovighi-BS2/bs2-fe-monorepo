import { Directive } from '@angular/core';

@Directive({
  selector: '[bs2-ds-tooltip]',
  standalone: true,
  host: {
    '[class.bs2_ds_tooltip]': 'true',
  },
})
export class Bs2DSTooltipDirective {}
