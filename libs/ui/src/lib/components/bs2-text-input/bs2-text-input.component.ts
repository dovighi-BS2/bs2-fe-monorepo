import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
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
  @Input() type = 'text';
  @Input() id = '';
  @Input() name = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = '';
  @Input() helperText = '';
  @Input() placeholder = '';
  @Input() readOnly = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  get hasErrors(): boolean {
    return false;
    // if (!this.form) return false;
    // const control = this.form?.get(this.name);
    // return Object.keys(control?.errors || {}).length > 0;
  }
}
