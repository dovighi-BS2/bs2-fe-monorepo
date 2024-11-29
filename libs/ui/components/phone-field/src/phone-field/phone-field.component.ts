import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectFieldOption } from '@bs2-fe-monorepo/ui/components/select-field';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TextFieldComponent } from '@bs2-fe-monorepo/ui/components/text-field';
import { CurrencyFieldComponent, flags } from '@bs2-fe-monorepo/ui/components/currency-field';

@Component({
  selector: 'phone-field',
  standalone: true,
  imports: [CommonModule, CurrencyFieldComponent, TextFieldComponent, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './phone-field.component.html',
  styleUrl: './phone-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask({ validation: false })],
})
export class PhoneFieldComponent {
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
  @Input() options: SelectFieldOption[] = [
    { value: flags.brl, text: flags.brl, image: 'BR.svg' },
    { value: flags.usa, text: flags.usa, image: 'US.svg' },
    { value: flags.chn, text: flags.chn, image: 'CN.svg' },
    { value: flags.esp, text: flags.esp, image: 'ES.svg' },
  ];
  @Input() hideCheckbox = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  public inputForm = new FormGroup({
    ddi: new FormControl([flags.brl]),
    number: new FormControl(''),
  });

  get mask() {
    switch (this.ddiValue) {
      case flags.brl:
        return '(00) 00000-0000';
      case flags.usa:
        return '(000) 000-0000';
      case flags.chn:
        return '(00) 0000-0000';
      case flags.esp:
        return '00 000 00 00 00';
      default:
        return '';
    }
  }

  get ddiControl() {
    return this.inputForm.get('ddi');
  }

  get ddiValue() {
    return this.inputForm.get('ddi')?.value[0] ?? '';
  }
}
