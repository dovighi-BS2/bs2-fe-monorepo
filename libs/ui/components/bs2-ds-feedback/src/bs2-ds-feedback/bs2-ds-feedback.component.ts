import { Component, Input, OnInit, ElementRef, inject } from '@angular/core';
import { Bs2DSIconComponent } from '@bs2/design-system/components/bs2-ds-icon';

@Component({
  selector: 'bs2-ds-feedback',
  standalone: true,
  imports: [Bs2DSIconComponent],
  templateUrl: './bs2-ds-feedback.component.html',
  styleUrl: './bs2-ds-feedback.component.scss',
})
export class Bs2DSFeedbackComponent implements OnInit {
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
    if (this.icon) return this.icon;

    switch (this.status) {
      case 'info':
        return 'ico-informacao';
      case 'attention':
        return 'ico-alerta';
      case 'error':
        return 'ico-erro';
      case 'success':
        return 'ico-checked';
      default:
        return this.icon;
    }
  }
}
