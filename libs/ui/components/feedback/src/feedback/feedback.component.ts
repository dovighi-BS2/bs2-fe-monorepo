import { Component, Input } from '@angular/core';

@Component({
  selector: 'feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration = 5000;
  @Input() message = '';
  @Input() type: 'static' | 'toast' = 'static';
  @Input() class = '';
}
