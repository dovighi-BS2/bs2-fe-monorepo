import { Directive, ElementRef, signal, OnDestroy, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Directive({
  selector: '[bs2-ds-button-selector]',
  exportAs: 'bs2-ds-button-selector',
  standalone: true,
})
export class Bs2DSButtonSelectorDirective implements OnDestroy {
  @Input() direction?: 'right' | 'left' = 'left';

  public open = signal(false);
  private triggerElement?: HTMLElement;
  private scrollSub?: Subscription;
  private resizeSub?: Subscription;
  private clickOutsideSub?: Subscription;

  constructor(private el: ElementRef<HTMLElement>) {}

  public ngOnDestroy() {
    this.stopListeners();
  }

  public toggle(trigger?: HTMLElement): void {
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

  public close(): void {
    this.open.set(false);
    this.hideDropdown();
    this.stopListeners();
  }

  private positionDropdown(): void {
    if (!this.triggerElement) return;

    const triggerRect = this.triggerElement.getBoundingClientRect();
    const dropdownEl = this.el.nativeElement;

    dropdownEl.style.top = `${triggerRect.bottom}px`;

    if (this.direction === 'left') dropdownEl.style.left = `${triggerRect.left}px`;
    if (this.direction === 'right') dropdownEl.style.left = `${triggerRect.right - triggerRect.width * 2}px`;

    dropdownEl.style.zIndex = '10000';
    dropdownEl.classList.add('bs2_ds_button_selector--open');
  }

  private hideDropdown(): void {
    const dropdownEl = this.el.nativeElement;
    dropdownEl.classList.remove('bs2_ds_button_selector--open');
  }

  private startListeners(): void {
    this.stopListeners();

    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => this.positionDropdown());

    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(50))
      .subscribe(() => this.positionDropdown());

    this.clickOutsideSub = fromEvent(document, 'click').subscribe((event: Event) => this.handleClickOutside(event));
  }

  private stopListeners(): void {
    this.scrollSub?.unsubscribe();
    this.resizeSub?.unsubscribe();
    this.clickOutsideSub?.unsubscribe();
  }

  private handleClickOutside(event: Event): void {
    const target = event.target as Node;
    const dropdownEl = this.el.nativeElement;

    if (!dropdownEl.contains(target) && this.triggerElement && !this.triggerElement.contains(target)) this.close();
  }
}
