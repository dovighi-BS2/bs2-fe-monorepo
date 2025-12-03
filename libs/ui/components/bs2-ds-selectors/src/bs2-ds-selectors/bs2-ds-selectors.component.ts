import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Bs2DSRadioComponent } from './bs2-ds-radio/bs2-ds-radio.component';
import { Bs2DSCheckboxComponent } from './bs2-ds-checkbox/bs2-ds-checkbox.component';
import { Bs2DSSwitchComponent } from './bs2-ds-switch/bs2-ds-switch.component';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'bs2-ds-selectors',
  standalone: true,
  imports: [Bs2DSRadioComponent, Bs2DSCheckboxComponent, Bs2DSSwitchComponent],
  templateUrl: './bs2-ds-selectors.component.html',
  styleUrl: './bs2-ds-selectors.component.scss',
})
export class Bs2DSSelectorsComponent {
  @Input() testId?: string = '';
  @Input() type?: 'radio' | 'checkbox' | 'switch' = 'checkbox';
  @Input() control = new FormControl();
  @Input() value: any = '';
  @Input() isMain = false;
  @Input() totalItemsCount?: number;
  @Input() subject = new Subject();
  @Output() emitter = new EventEmitter();
  @ContentChild(TemplateRef) content!: TemplateRef<any>;

  passingEmitter(value: any) {
    this.emitter?.emit(value);
  }
}
