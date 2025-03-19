import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'bs2-ds-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './bs2-ds-input-text.component.html',
  styleUrl: './bs2-ds-input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask({ validation: false })],
})
export class Bs2DSInputTextComponent {
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control: AbstractControl = new FormControl();
  @Input() type = 'text';
  @Input() id = '';
  @Input() testId = '';
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

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  @Output() clickEmitter = new EventEmitter();
  @Output() keyupEmitter = new EventEmitter();

  get getErrors(): string {
    if (!this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {}).map((error) => error);
    return errors[0];
  }
}
