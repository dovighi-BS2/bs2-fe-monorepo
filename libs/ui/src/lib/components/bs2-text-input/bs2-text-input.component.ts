import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'bs2-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bs2-text-input.component.html',
  styleUrl: './bs2-text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bs2TextInputComponent {
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
