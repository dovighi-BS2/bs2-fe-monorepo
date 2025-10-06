import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Bs2DSButtonSelectorDirective } from '../bs2-ds-button-selector/bs2-ds-button-selector.directive';

@Directive({
  selector: '[bs2-ds-button-selector-trigger]',
  exportAs: 'bs2-ds-button-selector-trigger',
  standalone: true,
})
export class Bs2DSButtonSelectorTriggerDirective {
  @Input('bs2-ds-button-selector-trigger') bs2DSButtonSelectorTrigger!: Bs2DSButtonSelectorDirective;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('click')
  onClick() {
    this.bs2DSButtonSelectorTrigger.toggle(this.el.nativeElement);
  }
}
