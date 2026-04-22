import { CustomValidators } from '@bs2/design-system/validators';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bs2DSInputSelectComponent, Bs2DSInputSelectOption } from '@bs2/design-system/components/bs2-ds-input-select';
import { provideNgxMask } from 'ngx-mask';
import { Bs2DSInputTextComponent } from '@bs2/design-system/components/bs2-ds-input-text';
import { flags } from '@bs2/design-system/components/bs2-ds-input-currency';
import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'bs2-ds-input-phone',
  standalone: true,
  imports: [CommonModule, Bs2DSInputTextComponent, Bs2DSInputSelectComponent, ReactiveFormsModule],
  providers: [provideNgxMask()],
  templateUrl: './bs2-ds-input-phone.component.html',
  styleUrl: './bs2-ds-input-phone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bs2DSInputPhoneComponent implements OnInit {
  @Input() id = '';
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control = new FormControl();
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() readOnly = false;

  public codeControl = new FormControl(null);
  public phoneControl = new FormControl(null);

  public codes: Bs2DSInputSelectOption[] = [
    { value: flags.brl, text: flags.brl, image: 'BR.svg' },
    { value: flags.usa, text: flags.usa, image: 'US.svg' },
    { value: flags.chn, text: flags.chn, image: 'CN.svg' },
    { value: flags.esp, text: flags.esp, image: 'ES.svg' },
  ];

  public masks: Record<string, string> = {
    [flags.brl]: '(00) 00000-0000',
    [flags.usa]: '(000) 000-0000',
    [flags.chn]: '(00) 0000-0000',
    [flags.esp]: '00 000 00 00 00',
  };

  ngOnInit(): void {
    const controlValue = String(this.control.value ?? '');
    const initialCode = this.codes.find((code) => String(controlValue).includes(code.value));
    this.codeControl.setValue(initialCode?.value || flags.brl);
    const initialPhone = controlValue?.replace(initialCode?.value, '');
    initialPhone && this.phoneControl.setValue(initialPhone);

    this.control.setValidators([
      CustomValidators.bs2DSInputPhone(`${this.codeControl.value}${this.masks[this.codeControl.value]}`),
    ]);

    combineLatest([
      this.codeControl.valueChanges.pipe(startWith(this.codeControl.value)),
      this.phoneControl.valueChanges.pipe(startWith(this.phoneControl.value)),
    ]).subscribe(() => {
      const code = this.codeControl.value;
      const phone = this.phoneControl.value;
      this.control.setValidators([CustomValidators.bs2DSInputPhone(`${code}${this.masks[code]}`)]);
      this.control.setValue(`${code}${phone}`);
      this.control.markAllAsTouched();
    });
  }

  public get getErrors(): string {
    if (!this.control || this.control.untouched) return '';
    if (this.phoneControl.untouched) return '';
    const errors = Object.values(this.control?.errors || {});
    return errors[0] || '';
  }
}
