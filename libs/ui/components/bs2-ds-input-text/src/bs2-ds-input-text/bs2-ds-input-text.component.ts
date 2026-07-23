import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bs2-ds-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, NgxCurrencyDirective],
  providers: [provideNgxMask({ validation: false }), NgxCurrencyDirective],
  templateUrl: './bs2-ds-input-text.component.html',
  styleUrl: './bs2-ds-input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bs2DSInputTextComponent implements OnChanges, OnDestroy {
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

  private uppercaseSub?: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  public get getErrors(): string {
    if (!this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {});
    return errors[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['uppercase'] || changes['control']) {
      this.uppercaseSub?.unsubscribe();
      if (this.uppercase) {
        this.uppercaseSub = this.control.valueChanges.subscribe((value: string) => {
          if (typeof value === 'string' && value !== value.toUpperCase()) {
            this.control.setValue(value.toUpperCase(), { emitEvent: false });
            this.cdr.markForCheck();
          }
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.uppercaseSub?.unsubscribe();
  }

}
