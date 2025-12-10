import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bs2DSInputSelectComponent, Bs2DSInputSelectOption } from '@bs2/design-system/components/bs2-ds-input-select';
import { flags } from './bs2-ds-input-currency.component.enum';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';

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
  @Input() label = '';
  @Input() leftIcon = '';
  @Input() rightIcon = 'icon icon-chevronbaixo';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = TranslationsConstantsBase.instance.placeholderMessages().selectOption;
  @Input() readOnly = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  public countries: Bs2DSInputSelectOption[] = [
    { value: flags.brl, text: flags.brl, image: 'BR.svg' },
    { value: flags.usa, text: flags.usa, image: 'US.svg' },
    { value: flags.chn, text: flags.chn, image: 'CN.svg' },
    { value: flags.esp, text: flags.esp, image: 'ES.svg' },
  ];
}
