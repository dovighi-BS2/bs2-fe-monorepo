import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Bs2DSChipOption } from './bs2-ds-chips.interface';
import { Subscription } from 'rxjs';

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

  @Input() options: Bs2DSChipOption[] | string[] = [];

  public _options: Bs2DSChipOption[] = [];

  ngOnInit(): void {
    this.transformOptionsToPattern();
  }

  transformOptionsToPattern() {
    this._options =
      this.options.length > 0 && typeof this.options[0] !== 'string'
        ? (this.options as Bs2DSChipOption[])
        : ((this.options || []).map((chip) => ({ label: chip, disabled: false })) as Bs2DSChipOption[]);
  }

  select(item: Bs2DSChipOption, e?: Event) {
    if ([' ', 'Enter'].includes((e as KeyboardEvent)?.key)) e.preventDefault();
    if (item.disabled) return;
    const alreadySelected = (this.control?.value || []).find((chip: string) => chip === item.label);
    alreadySelected ? this.remove(item) : this.add(item);
  }

  add(item: Bs2DSChipOption) {
    const addedValue = [...(this.control.value || []), item.label];
    this.control.setValue(addedValue);
  }

  remove(item: Bs2DSChipOption) {
    const filteredValue = (this.control.value || []).filter((chip: string) => chip !== item.label);
    this.control.setValue(filteredValue);
  }

  isSelected(item: Bs2DSChipOption) {
    return (this.control?.value || []).includes(item.label);
  }
}
