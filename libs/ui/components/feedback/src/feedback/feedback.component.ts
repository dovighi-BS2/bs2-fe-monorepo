import { Component, Input, OnInit, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent implements OnInit {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration?: number;
  @Input() message = '';

  private elementRef = inject(ElementRef);
  public isRemoved = false;

  ngOnInit(): void {
    if (this.duration) setTimeout(() => (this.isRemoved = true), this.duration);
  }

  close() {
    this.isRemoved = true;
    this.elementRef.nativeElement.remove();
  }
}
