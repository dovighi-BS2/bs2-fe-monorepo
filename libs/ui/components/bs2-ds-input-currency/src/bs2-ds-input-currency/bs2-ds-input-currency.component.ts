import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bs2DSInputSelectComponent, Bs2DSInputSelectOption } from '@bs2/design-system/components/bs2-ds-input-select';

@Component({
  selector: 'bs2-ds-input-currency',
  standalone: true,
  imports: [CommonModule, Bs2DSInputSelectComponent, ReactiveFormsModule],
  templateUrl: './bs2-ds-input-currency.component.html',
  styleUrl: './bs2-ds-input-currency.component.scss',
})
export class Bs2DSInputCurrencyComponent {
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control = new FormControl();
  @Input() id = '';
  @Input() testId = '';
  @Input() label = '';
  @Input() class = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = 'Selecione uma opção';
  @Input() readOnly = false;
  @Input() selecteds: Bs2DSInputSelectOption[] = [];
  @Input() options: Bs2DSInputSelectOption[] = [];

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;
}
