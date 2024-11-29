import { Component, Input } from '@angular/core';

@Component({
  selector: 'feedback-item',
  standalone: true,
  imports: [],
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.scss',
})
export class FeedbackItemComponent {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration = 5000;
  @Input() message = '';
  @Input() type: 'static' | 'toast' = 'static';
  @Input() class = '';
}
