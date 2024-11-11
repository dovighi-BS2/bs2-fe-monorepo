import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChipCheckboxOption } from './chip-checkbox.interface';

@Component({
  selector: 'chips-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chips-checkbox.component.html',
  styleUrl: './chips-checkbox.component.scss',
})
export class ChipsCheckboxComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() name?: string = '';
  @Input() testId?: string = '';

  @Input() options: ChipCheckboxOption[] | string[] = [];
  @Input() _options: ChipCheckboxOption[] = [];

  ngOnInit(): void {
    this.transformOptionsToPattern();
  }

  transformOptionsToPattern() {
    this._options =
      this.options.length > 0 && typeof this.options[0] !== 'string'
        ? (this.options as ChipCheckboxOption[])
        : ((this.options || []).map((chip) => ({ label: chip, disabled: false })) as ChipCheckboxOption[]);
  }

  select(item: ChipCheckboxOption) {
    if (item.disabled) return;
    const alreadySelected = (this.control?.value || []).find((chip: string) => chip === item.label);
    alreadySelected ? this.remove(item) : this.add(item);
  }

  add(item: ChipCheckboxOption) {
    const addedValue = [...(this.control.value || []), item.label];
    this.control.setValue(addedValue);
  }

  remove(item: ChipCheckboxOption) {
    const filteredValue = (this.control.value || []).filter((chip: string) => chip !== item.label);
    this.control.setValue(filteredValue);
  }

  isSelected(item: ChipCheckboxOption) {
    return (this.control?.value || []).includes(item.label);
  }

  get control() {
    return this.form.get(this.name);
  }
}
