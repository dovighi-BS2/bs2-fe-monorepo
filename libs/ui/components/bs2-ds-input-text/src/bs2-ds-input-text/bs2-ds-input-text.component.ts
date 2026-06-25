import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'bs2-ds-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, NgxCurrencyDirective],
  providers: [provideNgxMask({ validation: false }), NgxCurrencyDirective],
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
  @Input() uppercase = false;

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

  public onInput(event: Event): void {
    if (!this.uppercase) return;
    const input = event.target as HTMLInputElement;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(start, end);
    this.control.setValue(input.value, { emitEvent: true });
  }

}
