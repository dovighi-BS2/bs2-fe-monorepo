import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectFieldComponent, SelectFieldOption } from '@bs2-fe-monorepo/ui/components/select-field';

@Component({
  selector: 'currency-field',
  standalone: true,
  imports: [CommonModule, SelectFieldComponent, ReactiveFormsModule],
  templateUrl: './currency-field.component.html',
  styleUrl: './currency-field.component.scss',
})
export class CurrencyFieldComponent {
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
  @Input() selecteds: SelectFieldOption[] = [];
  @Input() options: SelectFieldOption[] = [];
  @Input() hideCheckbox = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;
}
