import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlatButtonDirective } from '@bs2-fe-monorepo/ui/directives/button/flat-button';
import { LoaderDirective } from '@bs2-fe-monorepo/ui/directives/loader';

@Component({
  selector: 'card-product',
  standalone: true,
  imports: [CommonModule, FlatButtonDirective, LoaderDirective],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
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
