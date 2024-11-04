import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectInputOption } from '@bs2-fe-monorepo/ui/components/select-input';
import { InputCurrencyComponent } from '@bs2-fe-monorepo/ui/components/input-currency';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { flags } from './phone-field.component.enum';
import { TextInputComponent } from '@bs2-fe-monorepo/ui/components/text-input';

@Component({
  selector: 'phone-field',
  standalone: true,
  imports: [CommonModule, InputCurrencyComponent, TextInputComponent, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './phone-field.component.html',
  styleUrl: './phone-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask({ validation: false })],
})
export class PhoneFieldComponent implements OnInit {
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
    { value: 1, text: flags.brl, image: 'BRL' },
    { value: 2, text: flags.usa, image: 'USA' },
    { value: 2, text: flags.chn, image: 'CHN' },
    { value: 2, text: flags.esp, image: 'ESP' },
  ];
  @Input() hideCheckbox = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  inputForm: any;

  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      ddi: new FormControl([{ value: 1, text: flags.brl, image: 'BRL' }]),
      number: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.inputForm.get('ddi')?.valueChanges.subscribe((a: any) => {
      // console.log(a);
      // this.inputForm.get('ddi').setValue(a[0].text)
    });
  }
  get mask() {
    switch (this.getDdiValue) {
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

  get getDdiValue() {
    const getControl = this.inputForm.get('ddi');

    return getControl.value[0].text ?? '';
  }
}
