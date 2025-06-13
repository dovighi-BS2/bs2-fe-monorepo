import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'bs2-ds-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bs2-ds-checkbox.component.html',
  styleUrl: './bs2-ds-checkbox.component.scss',
})
export class Bs2DSCheckboxComponent {
  @Input() testId?: string = '';
  @Input() content!: TemplateRef<any>;
  @Input() control = new FormControl();
  @Input() value: any = '';
  @Input() isMain = false;
  @Input() totalItemsCount?: number;
  @Input() subject = new Subject();
  @Output() emitter = new EventEmitter();

  public toggle(): void {
    this.subject?.next(this.value);
    this.emitter?.emit(this.value);
    if (this.isMain) return;

    if (typeof this.control.value === 'object') {
      const alreadyIn = this.control.value.includes(this.value);
      !alreadyIn
        ? this.control.setValue([...this.control.value, this.value])
        : this.control.setValue(this.control.value.filter((item: any) => item !== this.value));
    }

    if (typeof this.control.value !== 'object') {
      this.control.setValue(this.value === this.control.value ? '' : this.value);
    }
  }

  public isSelected(): boolean {
    if (typeof this.control.value === 'object') return (this.control.value || []).includes(this.value);

    return this.control.value === this.value;
  }

  public isAllSelected(): boolean {
    if (typeof this.control.value !== 'object') return false;
    return this.totalItemsCount === (this.control.value || []).length;
  }

  public isIndeterminate(): boolean {
    return this.isMain && !this.isAllSelected() && (this.control.value || []).length >= 1;
  }
}
