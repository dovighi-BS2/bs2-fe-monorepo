import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bs2DSFlatButtonDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSLoaderDirective } from '@bs2-fe-monorepo/ui/directives/bs2-ds-loader';

@Component({
  selector: 'bs2-ds-card-product',
  standalone: true,
  imports: [CommonModule, Bs2DSFlatButtonDirective, Bs2DSLoaderDirective],
  templateUrl: './bs2-ds-card-product.component.html',
  styleUrl: './bs2-ds-card-product.component.scss',
})
export class Bs2DSCardProductComponent {
  @Input() testId? = '';
  @Input() loader? = false;
  @Input() unavailableTitle? = '';
  @Input() icon? = '';
  @Input() title? = '';
  @Input() label? = '';
  @Input() value?: number;
  @Input() text? = '';
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
