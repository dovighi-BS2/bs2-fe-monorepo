import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'token-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './token-field.component.html',
  styleUrl: './token-field.component.scss',
})
export class TokenFieldComponent {
  @ViewChildren('tokenInputField') tokenInputField!: QueryList<ElementRef>;
  @Input() state?: 'default' | 'hovered' | 'focused' | 'disabled';

  @Input() form?: FormGroup;
  @Input() type = 'text';
  @Input() id = '';
  @Input() testId = '';
  @Input() name = '';
  @Input() label = '';
  @Input() class = '';
  @Input() readOnly = false;
  @Input() qtdInputs = 6;
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() ariaRequired = false;
  @Input() ariaInvalid = false;

  inputToken(event: any, index: number) {
    const target = event.currentTarget;
    if (target.value && (index + 1) % this.tokenInputField.length) {
      this.tokenInputField.toArray()[index + 1].nativeElement.focus();
    }
  }
  keyDownToken(event: any, index: number) {
    const target = event.currentTarget;
    if (!target.value && event.key === 'Backspace' && index) {
      this.tokenInputField.toArray()[index - 1].nativeElement.focus();
    }
  }
  pasteToken(event: any) {
    console.log(typeof event);
    const value = event.clipboardData.getData('text');
    const pin = value.replace(/\s|-/g, '');
    const chars = [...pin];
    this.tokenInputField.forEach(
      (e, i) => (e.nativeElement.value = chars[i] ?? '')
    );
    this.tokenInputField
      .toArray()
      [
        Math.min(this.tokenInputField.length, pin.length) - 1
      ].nativeElement.focus();
  }
}
