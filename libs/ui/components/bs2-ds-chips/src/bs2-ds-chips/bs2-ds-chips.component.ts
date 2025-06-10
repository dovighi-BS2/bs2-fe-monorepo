import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bs2DSChipOption } from './bs2-ds-chips.interface';
import { CustomValidators } from '@bs2/design-system/validators';

@Component({
  selector: 'bs2-ds-chips',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bs2-ds-chips.component.html',
  styleUrl: './bs2-ds-chips.component.scss',
})
export class Bs2DSChipsComponent implements OnInit {
  @Input() control: AbstractControl = new FormControl();
  @Input() testId?: string = '';

  @Input() minSelectable?: number;
  @Input() maxSelectable?: number;
  @Input() options?: Bs2DSChipOption[] | string[] = [];

  public _options: Bs2DSChipOption[] = [];

  ngOnInit(): void {
    this.transformOptionsToPattern();
    this.minSelectable && this.control.addValidators(CustomValidators.minLength(this.minSelectable));
    this.maxSelectable && this.control.addValidators(CustomValidators.maxLength(this.maxSelectable));
  }

  transformOptionsToPattern() {
    this._options =
      this.options.length > 0 && typeof this.options[0] !== 'string'
        ? (this.options as Bs2DSChipOption[])
        : ((this.options || []).map((chip) => ({ value: chip, label: chip, disabled: false })) as Bs2DSChipOption[]);
  }

  select(item: Bs2DSChipOption, e?: Event) {
    if ([' ', 'Enter'].includes((e as KeyboardEvent)?.key)) e.preventDefault();
    if (item.disabled) return;
    const alreadySelected = (this.control?.value || []).find((chip: string) => chip === item.value);
    alreadySelected ? this.remove(item) : this.add(item);
  }

  add(item: Bs2DSChipOption) {
    const addedValue = [...(this.control.value || []), item.value];
    this.control.setValue(addedValue);
    if (this.maxSelectable && this.control.value.length > this.maxSelectable)
      (this.control.value || []).length > 0 &&
        this.remove(this._options.find((chip) => chip.value === this.control.value[0]));
  }

  remove(item: Bs2DSChipOption) {
    if (this.minSelectable && this.control.value.length <= this.minSelectable) return;
    const filteredValue = (this.control.value || []).filter((chip: string) => chip !== item.value);
    this.control.setValue(filteredValue);
  }

  isSelected(item: Bs2DSChipOption) {
    return (this.control?.value || []).includes(item.value);
  }
}
