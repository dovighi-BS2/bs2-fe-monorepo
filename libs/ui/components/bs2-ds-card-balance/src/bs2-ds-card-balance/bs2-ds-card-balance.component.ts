import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlatButtonDirective } from '@bs2-fe-monorepo/ui/directives/button/flat-button';
import { LoaderDirective } from '@bs2-fe-monorepo/ui/directives/loader';

@Component({
  selector: 'bs2-ds-card-balance',
  standalone: true,
  imports: [CommonModule, FlatButtonDirective, LoaderDirective],
  templateUrl: './bs2-ds-card-balance.component.html',
  styleUrl: './bs2-ds-card-balance.component.scss',
})
export class Bs2DSCardBalanceComponent {
  @Input() testId? = '';
  @Input() loader? = false;
  @Input() balance? = 0;
  @Input() limit? = 0;
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
