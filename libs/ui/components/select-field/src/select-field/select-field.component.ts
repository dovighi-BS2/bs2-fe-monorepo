import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { SelectFieldOption } from './select-field.interface';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkListboxModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
})
export class SelectFieldComponent implements OnInit, AfterViewInit, OnDestroy {
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
  @Input() options: SelectFieldOption[] = [];
  @Input() hideCheckbox = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  public selecteds: SelectFieldOption[] = [];
  private selectInputFieldSub: Subscription = new Subscription();

  ngOnInit(): void {
    // if (this.options[0] && this.selecteds.length <= 0) this.selectOption(this.options[0]);
    if (this.form && this.control?.value.length > 0) {
      this.selecteds = (this.options || []).filter((item) => (this.control?.value || []).includes(item.value));
    }
  }
  ngAfterViewInit(): void {
    if (this.selectInputField?.nativeElement) {
      this.selectInputFieldSub = fromEvent(this.selectInputField?.nativeElement, 'click').subscribe(() =>
        this.selectInputOption?.nativeElement.focus()
      );
    }
  }

  ngOnDestroy(): void {
    this.selectInputFieldSub.unsubscribe();
  }

  selectOption(option: SelectFieldOption) {
    if (this.readOnly) return;

    const alreadyIn = (this.selecteds || []).find((item) => item.value === option.value);

    if (!this.multiple) {
      (document.activeElement as any).blur();
      this.selecteds = [option];
      // this.selecteds = alreadyIn ? [] : [option];
    } else {
      alreadyIn ? this.removeSelected(option) : this.addSelected(option);
    }
    this.form && this.control?.setValue(this.selecteds.map((item) => item.value));
  }

  addSelected(option: SelectFieldOption) {
    this.selecteds.push(option);
  }

  removeSelected(option: SelectFieldOption) {
    this.selecteds = (this.selecteds || []).filter((item) => item.value !== option.value);
  }

  selectByEnter(option: SelectFieldOption) {
    this.selectOption(option);
  }

  selectByClick(option: SelectFieldOption) {
    this.selectOption(option);
  }

  isSelected(option: SelectFieldOption) {
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
