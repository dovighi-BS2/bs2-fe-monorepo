import { Component, Input, OnInit, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'bs2-ds-feedback',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-feedback.component.html',
  styleUrl: './bs2-ds-feedback.component.scss',
})
export class Bs2DSFeedbackComponent implements OnInit {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration?: number;
  @Input() title = '';
  @Input() message = '';
  @Input() hasClose = false;
  @Input() icon = '';

  private elementRef = inject(ElementRef);
  public isRemoved = false;

  ngOnInit(): void {
    if (this.duration) setTimeout(() => (this.isRemoved = true), this.duration);
  }

  close() {
    this.isRemoved = true;
    this.elementRef.nativeElement.remove();
  }

  get filteredIcon(): string {
    switch (this.status) {
      case 'info':
        return 'icon icon-informacao';
      case 'attention':
        return 'icon icon-erro';
      case 'error':
        return 'icon icon-sair';
      case 'success':
        return 'icon icon-checked';
      default:
        return this.icon;
    }
  }
}
