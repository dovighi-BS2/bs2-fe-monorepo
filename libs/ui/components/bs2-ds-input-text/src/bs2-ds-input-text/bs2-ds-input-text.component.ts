import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'bs2-ds-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxCurrencyDirective, NgxMaskDirective],
  providers: [provideNgxMask({ validation: false })],
  templateUrl: './bs2-ds-input-text.component.html',
  styleUrl: './bs2-ds-input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bs2DSInputTextComponent {
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control = new FormControl();
  @Input() type = 'text';
  @Input() id = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = '';
  @Input() autocomplete = '';
  @Input() readOnly = false;
  @Input() mask = '';
  @Input() currencyMask?: object;
  @Input() hideErrors = false;
  @Input() isDate = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  @Output() clickEmitter = new EventEmitter();
  @Output() keyupEmitter = new EventEmitter();

  public get getErrors(): string {
    if (!this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {});
    return errors[0];
  }

  bloquearDigitacao(event: KeyboardEvent) {
    if (this.isDate) {
      event.preventDefault();
    }
  }
}
