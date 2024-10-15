import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

@Component({
  selector: 'token-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './token-field.component.html',
  styleUrl: './token-field.component.scss',
})
export class TokenFieldComponent implements AfterViewInit {
  @ViewChildren('tokenInputField') tokenInputField!: QueryList<ElementRef>;
  @Input() state?: 'default' | 'hovered' | 'focused' | 'disabled' | 'error';

  @Input() form?: FormGroup;
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

  constructor(private fb: FormBuilder) {}

  ngAfterViewInit(): void {
    if (this.form) {
      for (let index = 0; index < this.qtdInputs; index++) {
        this.forms.push(
          this.fb.group({ [index]: [null, CustomValidators.numeric] })
        );
      }
    }
  }

  get forms(): FormArray {
    return this.form?.get(this.name) as FormArray;
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
    this.tokenInputField.forEach(
      (e, i) => (e.nativeElement.value = chars[i] ?? '')
    );
    this.tokenInputField
      .toArray()
      [
        Math.min(this.tokenInputField.length, pin.length) - 1
      ].nativeElement.focus();
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
