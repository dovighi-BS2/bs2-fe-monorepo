import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bs2DSFlatButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button';
import { Bs2DSLoadingSpinningDirective } from '@bs2/design-system/directives/bs2-ds-loading-spinning';

@Component({
  selector: 'bs2-ds-card-product',
  standalone: true,
  imports: [CommonModule, Bs2DSFlatButtonDirective, Bs2DSLoadingSpinningDirective],
  templateUrl: './bs2-ds-card-product.component.html',
  styleUrl: './bs2-ds-card-product.component.scss',
})
export class Bs2DSCardProductComponent {
  @Input() loader? = false;
  @Input() unavailableTitle? = '';
  @Input() icon? = '';
  @Input() title? = '';
  @Input() label? = '';
  @Input() value?: number;
  @Input() buttonLabel = 'Atualizar';
  @Input() template: 'visible' | 'hidden' | 'unavailable' = 'visible';
  @Input() actionLabel: string | null = null;
  @Input() showIcon = false;
  @Output() emitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionClick: EventEmitter<void> = new EventEmitter<void>();

  public Number = Number;
  public valueVisible = true;

  setTemplate(template: 'visible' | 'hidden' | 'unavailable') {
    this.template = template;
  }

  toggleValueVisibility(): void {
    this.valueVisible = !this.valueVisible;
  }

  transform(value: number): string {
    const formattedValue = new Intl.NumberFormat('pt-br', {
      style: 'decimal',
      minimumFractionDigits: 2,
    }).format(value);
    return formattedValue;
  }
}
