import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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

  @Input() state?:
    | 'default'
    | 'hovered'
    | 'focused'
    | 'error'
    | 'filled'
    | 'disabled';

  @Input() form?: any;
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

  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  private selectInputFieldSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.options[0] && this.selectOption(this.options[0]);
  }
  ngAfterViewInit(): void {
    this.selectInputFieldSub = fromEvent(
      this.selectInputField?.nativeElement,
      'click'
    ).subscribe(() => this.selectInputOption?.nativeElement.focus());
  }

  ngOnDestroy(): void {
    this.selectInputFieldSub.unsubscribe();
  }

  selectOption(option: SelectInputOption) {
    if (this.readOnly) return;

    const alreadyIn = (this.selecteds || []).find(
      (item) => item.value === option.value
    );

    if (!this.multiple) {
      this.selecteds = alreadyIn ? [] : [option];
    } else {
      alreadyIn ? this.removeSelected(option) : this.addSelected(option);
    }
    this.form && this.form.get(this.name)?.setValue(this.selecteds);
  }

  addSelected(option: SelectInputOption) {
    this.selecteds.push(option);
  }

  removeSelected(option: SelectInputOption) {
    this.selecteds = (this.selecteds || []).filter(
      (item) => item.value !== option.value
    );
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

  getSelected() {
    const selecteds = (this.selecteds || []).map((item) => item.text);

    if (selecteds.length > 1) {
      return `${selecteds[selecteds.length - 1]} (+${selecteds.length - 1})`;
    }

    return selecteds.length ? selecteds[0] : this.placeholder;
  }

  get getErrors(): string {
    if (!this.form || !this.form.get(this.name)) return '';
    const control = this.form?.get(this.name);
    return Object.values(control?.errors || {})
      .map((error) => error)
      .join('');
  }
}
