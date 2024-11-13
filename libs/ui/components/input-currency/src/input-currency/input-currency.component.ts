import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectInputComponent, SelectInputOption } from '@bs2-fe-monorepo/ui/components/select-input';

@Component({
  selector: 'input-currency',
  standalone: true,
  imports: [CommonModule, SelectInputComponent, ReactiveFormsModule],
  templateUrl: './input-currency.component.html',
  styleUrl: './input-currency.component.scss',
})
export class InputCurrencyComponent {
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() form?: FormGroup;
  @Input() multiple = false;
  @Input() id = '';
  @Input() testId = '';
  @Input() name = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = 'arrow-down';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = 'Selecione uma opção';
  @Input() readOnly = false;
  @Input() selecteds: SelectInputOption[] = [];
  @Input() options: SelectInputOption[] = [
    { value: 1, text: 'BRL', image: '123' },
    { value: 2, text: 'USD', image: '123' },
    { value: 3, text: 'EUR', image: '123' },
    { value: 4, text: 'GBP', image: '123' },
    { value: 5, text: 'CAD', image: '123' },
    { value: 6, text: 'AUD', image: '123' },
    { value: 7, text: 'CNY', image: '123' },
    { value: 8, text: 'AED', image: '123' },
  ];
  @Input() hideCheckbox = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;
}
