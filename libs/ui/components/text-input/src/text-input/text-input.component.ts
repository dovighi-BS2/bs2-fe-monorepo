import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask(maskConfig)],
})
export class TextInputComponent {
  @Input() state?:
    | 'default'
    | 'hovered'
    | 'focused'
    | 'error'
    | 'filled'
    | 'disabled';

  @Input() form?: any;
  @Input() type = 'text';
  @Input() id = '';
  @Input() testId = '';
  @Input() name = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() inputMask: any = '';

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  get getErrors(): string {
    if (!this.form || !this.form.get(this.name)) return '';
    const control = this.form?.get(this.name);
    return Object.values(control?.errors || {})
      .map((error) => error)
      .join('');
  }
}
