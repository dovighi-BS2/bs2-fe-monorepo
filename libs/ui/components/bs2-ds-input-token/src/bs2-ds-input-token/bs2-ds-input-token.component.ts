import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';

@Component({
  selector: 'bs2-ds-input-token',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bs2-ds-input-token.component.html',
  styleUrl: './bs2-ds-input-token.component.scss',
})
export class Bs2DSInputTokenComponent implements OnInit {
  @ViewChildren('tokenInputField') tokenInputField!: QueryList<ElementRef>;

  private fb = inject(FormBuilder);

  @Input() state?: 'default' | 'hovered' | 'focused' | 'disabled' | 'error';

  @Input() control: AbstractControl = new FormControl();
  @Input() type = 'text';
  @Input() id = '';
  @Input() testId = '';
  @Input() name = '';
  @Input() class = '';
  @Input() readOnly = false;
  @Input() qtdInputs = 6;
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;
  @Output() tokenValue = new EventEmitter<string>();

  public forms = this.fb.array(
    Array(this.qtdInputs)
      .fill(0)
      .map((_, index) => {
        return this.fb.group({ [index]: ['', CustomValidators.numeric] });
      })
  );

  ngOnInit(): void {
    this.forms.valueChanges.subscribe(() => {
      if (this.forms.invalid) return;

      const token = this.forms.controls.map((form, index) => this.getControlByIndex(index).value).join('');
      this.control.setValue(token);
    });
  }

  getControlByIndex(index: number) {
    return this.forms.controls[index].get(String(index)) as FormControl;
  }

  inputToken(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    if (target.value && (index + 1) % this.tokenInputField.length) {
      this.tokenInputField.toArray()[index + 1].nativeElement.focus();
    }
    this.returnValue();
  }
  keyDownToken(event: KeyboardEvent, index: number) {
    const target = event.currentTarget as HTMLInputElement;
    if (!target.value && event.key === 'Backspace' && index) {
      this.tokenInputField.toArray()[index - 1].nativeElement.focus();
      this.returnValue();
    }
  }
  pasteToken(event: ClipboardEvent) {
    const value = event.clipboardData?.getData('text');
    const pin = value ? value.replace(/\s|-/g, '') : '';
    const chars = [...pin];
    this.tokenInputField.forEach((e, i) => (e.nativeElement.value = chars[i] ?? ''));
    this.tokenInputField.toArray()[Math.min(this.tokenInputField.length, pin.length) - 1].nativeElement.focus();
    this.returnValue();
  }
  returnValue() {
    let valueForm = '';
    for (let index = 0; index < this.qtdInputs; index++) {
      valueForm += this.tokenInputField.toArray()[index].nativeElement.value;
    }
    this.tokenValue.emit(valueForm);
  }
  getErrors(index: number): boolean {
    if (!this.forms || !this.forms.controls[index].value[index]) return false;
    const control = this.forms.controls[index] as FormGroup;
    return !!Object.values(control.controls)[0].errors;
  }
}
