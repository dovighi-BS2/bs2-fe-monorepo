import { AfterViewInit, Component, ElementRef, input, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { SelectInputOption } from './select-input.interface';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'select-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkListboxModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
})
export class SelectInputComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('selectInputField') selectInputField!: ElementRef;
  @ViewChild('selectInputOption') selectInputOption!: ElementRef;
  @ViewChild('selectInput') selectInput!: ElementRef;

  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() form?: FormGroup;
  @Input() multiple = false;
  @Input() id = '';
  @Input() testId = '';
  @Input() name = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = 'arrow-down';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = 'Selecione uma opção';
  @Input() readOnly = false;
  @Input() selecteds: SelectInputOption[] = [];
  @Input() options: SelectInputOption[] = [];
  @Input() hideCheckbox = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  private selectInputFieldSub: Subscription = new Subscription();

  ngOnInit(): void {
    if (this.options[0] && this.selecteds.length <= 0) this.selectOption(this.options[0]);

    if (this.selecteds.length > 0) this.form && this.form.get(this.name)?.setValue(this.selecteds);

    if (this.form && this.form.get(this.name)?.value.length > 0) this.selecteds = this.form.get(this.name)?.value;
  }
  ngAfterViewInit(): void {
    this.selectInputFieldSub = fromEvent(this.selectInputField?.nativeElement, 'click').subscribe(() =>
      this.selectInputOption?.nativeElement.focus()
    );
  }

  ngOnDestroy(): void {
    this.selectInputFieldSub.unsubscribe();
  }

  selectOption(option: SelectInputOption) {
    if (this.readOnly) return;

    const alreadyIn = (this.selecteds || []).find((item) => item.value === option.value);

    if (!this.multiple) {
      (document.activeElement as any).blur();
      this.selecteds = [option];
      // this.selecteds = alreadyIn ? [] : [option];
    } else {
      alreadyIn ? this.removeSelected(option) : this.addSelected(option);
    }
    this.form && this.form.get(this.name)?.setValue(this.selecteds);
  }

  addSelected(option: SelectInputOption) {
    this.selecteds.push(option);
  }

  removeSelected(option: SelectInputOption) {
    this.selecteds = (this.selecteds || []).filter((item) => item.value !== option.value);
  }

  selectByEnter(el: any, option: SelectInputOption) {
    this.selectOption(option);
  }

  selectByClick(option: SelectInputOption) {
    this.selectOption(option);
  }

  isSelected(option: SelectInputOption) {
    return (this.selecteds || []).find((item) => item.value === option.value);
  }

  getSelectedTexts() {
    if (this.selecteds.length > 1) {
      const selecteds = (this.selecteds || []).map((item) => item.text);
      return `${selecteds[selecteds.length - 1]} (+${selecteds.length - 1})`;
    }

    return this.selecteds.length ? `${this.selecteds[0].text}` : this.placeholder;
  }

  getSelectedImage() {
    if (this.selecteds.length <= 0 || !this.selecteds[0].image) return '';

    return this.selecteds[0].image;
  }

  get control() {
    return this.form.get(this.name);
  }

  get getErrors(): string {
    if (!this.form || !this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {}).map((error) => error);
    return errors[0];
  }
}
