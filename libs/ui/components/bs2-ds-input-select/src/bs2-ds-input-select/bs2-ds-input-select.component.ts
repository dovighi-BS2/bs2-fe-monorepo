import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { Bs2DSInputSelectOption } from './bs2-ds-input-select.interface';
import { fromEvent, Subscription } from 'rxjs';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';
import { Bs2DSIconComponent } from '@bs2/design-system/components/bs2-ds-icon';

@Component({
  selector: 'bs2-ds-input-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkListboxModule, Bs2DSIconComponent],
  templateUrl: './bs2-ds-input-select.component.html',
  styleUrl: './bs2-ds-input-select.component.scss',
})
export class Bs2DSInputSelectComponent implements AfterViewInit, OnDestroy {
  @ViewChild('selectInputField') selectInputField!: ElementRef;
  @ViewChild('selectInputOption') selectInputOption!: ElementRef;
  @ViewChild('selectInput') selectInput!: ElementRef;

  @Input() state?: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled';

  @Input() control = new FormControl();
  @Input() id = '';
  @Input() label = '';
  @Input() class = '';
  @Input() leftIcon = '';
  @Input() rightIcon = 'ico-chevron-baixo';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = TranslationsConstantsBase.instance.placeholderMessages().selectOption;
  @Input() readOnly = false;
  @Input() options: Bs2DSInputSelectOption[] = [];
  @Input() hideCheckbox = false;
  @Input() hideErrors = false;

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  private selectInputFieldSub: Subscription = new Subscription();

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

  selectOption(option: Bs2DSInputSelectOption) {
    if (this.readOnly) return;

    if (!this.controlIsArray) {
      (document.activeElement as any).blur();
      this.control.setValue(option.value);
    } else {
      const alreadyIn = (this.control.value || []).find((item: string) => item === option.value);
      alreadyIn ? this.removeSelected(option) : this.addSelected(option);
    }
  }

  addSelected(option: Bs2DSInputSelectOption) {
    this.control.setValue([...this.control.value, option.value]);
  }

  removeSelected(option: Bs2DSInputSelectOption) {
    this.control.setValue((this.control.value || []).filter((item: string) => item !== option.value));
  }

  selectByEnter(option: Bs2DSInputSelectOption) {
    this.selectOption(option);
  }

  selectByClick(option: Bs2DSInputSelectOption) {
    this.selectOption(option);
  }

  isSelected(option: Bs2DSInputSelectOption) {
    return this.controlIsArray
      ? (this.control.value || []).includes(option.value)
      : this.control.value === option.value;
  }

  getSelectedTexts() {
    if (!this.controlIsArray) {
      const selected = (this.options || []).find((item) => item.value == this.control.value);
      return selected?.text ?? this.placeholder;
    } else {
      const lastValueSelected = this.control.value[this.control.value.length - 1];
      const lastSelected = (this.options || []).find((item) => item.value == lastValueSelected);
      return this.control.value.length > 0
        ? `${lastSelected.text}${this.control.value.length > 1 ? ` (+${this.control.value.length - 1})` : ''}`
        : this.placeholder;
    }
  }

  getSelectedImage() {
    if (!this.controlIsArray) {
      const selected = (this.options || []).find((item) => item.value == this.control.value);
      return selected?.image ?? '';
    } else {
      const selected = (this.options || []).find(
        (item) => item.value == this.control.value[this.control.value.length - 1]
      );
      return selected?.image ?? '';
    }
  }

  get getErrors(): string {
    if (!this.control || !this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {});
    return errors[0];
  }

  get controlIsArray(): boolean {
    return Array.isArray(this.control.value);
  }
}
