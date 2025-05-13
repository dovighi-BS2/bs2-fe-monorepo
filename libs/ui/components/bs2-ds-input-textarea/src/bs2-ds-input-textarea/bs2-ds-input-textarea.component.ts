import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'bs2-ds-input-textarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextFieldModule],
  templateUrl: './bs2-ds-input-textarea.component.html',
  styleUrl: './bs2-ds-input-textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bs2DSInputTextareaComponent {
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control = new FormControl();
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
  @Input() autosize = true;
  @Input() resize = false;
  @Input() rows = 1;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  @Input() maxLength = 0;

  get getErrors(): string {
    if (!this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {}).map((error) => error);
    return errors[0];
  }
}
