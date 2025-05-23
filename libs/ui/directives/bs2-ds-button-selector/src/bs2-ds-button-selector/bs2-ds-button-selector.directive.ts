import { Directive, ElementRef, HostListener, signal, OnDestroy } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[bs2-ds-button-selector]',
  exportAs: 'bs2-ds-button-selector',
  standalone: true,
})
export class Bs2DSButtonSelectorDirective implements OnDestroy {
  open = signal(false);
  private triggerElement?: HTMLElement;
  private scrollSub?: Subscription;
  private resizeSub?: Subscription;
  private clickOutsideSub?: Subscription;

  constructor(private el: ElementRef<HTMLElement>) {}

  toggle(trigger?: HTMLElement) {
    if (trigger) this.triggerElement = trigger;

    const isOpen = !this.open();

    if (isOpen) {
      this.open.set(true);
      this.positionDropdown();
      this.startListeners();
    } else {
      this.close();
    }
  }

  close() {
    this.open.set(false);
    this.hideDropdown();
    this.stopListeners();
  }

  private positionDropdown() {
    if (!this.triggerElement) return;

    const triggerRect = this.triggerElement.getBoundingClientRect();
    const dropdownEl = this.el.nativeElement;

    dropdownEl.style.position = 'fixed';
    dropdownEl.style.top = `${triggerRect.bottom}px`;
    dropdownEl.style.left = `${triggerRect.left}px`;
    dropdownEl.style.display = 'block';
    dropdownEl.style.zIndex = '10000';
  }

  private hideDropdown() {
    const dropdownEl = this.el.nativeElement;
    dropdownEl.style.display = 'none';
  }

  private startListeners() {
    this.stopListeners(); // remove antes pra evitar múltiplos subs

    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => this.positionDropdown());

    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(50))
      .subscribe(() => this.positionDropdown());

    this.clickOutsideSub = fromEvent(document, 'click').subscribe((event: Event) => {
      this.handleClickOutside(event);
    });
  }

  private stopListeners() {
    this.scrollSub?.unsubscribe();
    this.resizeSub?.unsubscribe();
    this.clickOutsideSub?.unsubscribe();
  }

  private handleClickOutside(event: Event) {
    const target = event.target as Node;
    const dropdownEl = this.el.nativeElement;

    // Se clicar fora do dropdown e fora do trigger, fecha o dropdown
    if (!dropdownEl.contains(target) && this.triggerElement && !this.triggerElement.contains(target)) {
      this.close();
    }
  }

  ngOnDestroy() {
    this.stopListeners();
  }
}
