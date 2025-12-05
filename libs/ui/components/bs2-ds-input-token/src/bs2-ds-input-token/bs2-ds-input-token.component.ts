import { Component, ElementRef, inject, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'bs2-ds-input-token',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bs2-ds-input-token.component.html',
  styleUrl: './bs2-ds-input-token.component.scss',
})
export class Bs2DSInputTokenComponent implements OnInit {
  @ViewChildren('bs2DSInputToken') bs2DSInputToken!: QueryList<ElementRef>;
  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'default';

  @Input() control = new FormControl();
  @Input() id = '';
  @Input() label = '';
  @Input() class = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() readOnly = false;
  @Input() amount = 6;
  @Input() hideErrors = false;

  public fb = inject(FormBuilder);
  public form: FormArray;

  ngOnInit(): void {
    this.form = this.fb.array([]);
    for (let i = 0; i < this.amount; i++) this.form.push(this.fb.control(''));
  }

  onInput(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    if (target.value && index + 1 < this.amount) {
      this.bs2DSInputToken.toArray()[index + 1].nativeElement.focus();
    }
    this.returnValue();
  }
  onKeyUp(event: KeyboardEvent, index: number) {
    const target = event.currentTarget as HTMLInputElement;
    if (!target.value && event.key === 'Backspace' && index) {
      this.bs2DSInputToken.toArray()[index - 1].nativeElement.focus();
      this.returnValue();
    } else {
      this.onInput(event, index);
    }
  }

  onPaste(event: ClipboardEvent) {
    const value = event.clipboardData?.getData('text');
    const pin = value ? value.replace(/\s|-/g, '') : '';
    const chars = [...pin];
    this.bs2DSInputToken.forEach((e, i) => (e.nativeElement.value = chars[i] ?? ''));
    this.bs2DSInputToken.toArray()[Math.min(this.bs2DSInputToken.length, pin.length) - 1].nativeElement.focus();
    this.returnValue();
  }

  returnValue() {
    let touchedCount = 0;
    const value = [];
    for (let i = 0; i < this.amount; i++) value.push(this.form.at(i).value);
    for (let i = 0; i < this.amount; i++) if (this.form.at(i).touched) touchedCount++;
    if (touchedCount >= this.amount) this.control.markAllAsTouched();
    this.control.setValue(value.join(''));
  }

  getControlByItem(item: AbstractControl): FormControl {
    return item as FormControl;
  }

  public get getErrors(): string {
    const controls = Array(this.amount)
      .fill(0)
      .map((_, index) => this.form.at(index).touched);
    if (!controls.every((item) => item)) this.control.markAllAsTouched();
    if (!this.control || this.control.untouched || !controls.every((item) => item)) return '';
    const errors = Object.values(this.control?.errors || {});
    return errors[0];
  }
}
