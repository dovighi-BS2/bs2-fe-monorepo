import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSLoadingSpinningDirective } from '@bs2/design-system/directives/bs2-ds-loading-spinning';

@Component({
  selector: 'bs2-ds-card-balance',
  standalone: true,
  imports: [CommonModule, Bs2DSFlatButtonDirective, Bs2DSLoadingSpinningDirective],
  templateUrl: './bs2-ds-card-balance.component.html',
  styleUrl: './bs2-ds-card-balance.component.scss',
})
export class Bs2DSCardBalanceComponent {
  @Input() loader = false;
  @Input() balance = 0;
  @Input() limit = 0;
  @Input() template: 'visible' | 'hidden' | 'unavailable' = 'visible';
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  public Number = Number;

  setTemplate(template: 'visible' | 'hidden' | 'unavailable') {
    this.template = template;
  }

  transform(value: number): string {
    const formattedValue = new Intl.NumberFormat('pt-br', {
      style: 'decimal',
      minimumFractionDigits: 2,
    }).format(value);
    return formattedValue;
  }
}
