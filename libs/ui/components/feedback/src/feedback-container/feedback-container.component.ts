import { Component, inject } from '@angular/core';
import { FeedbackContainerService } from './feedback-container.service';
import { FeedbackComponent } from '../feedback/feedback.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'feedback-container',
  standalone: true,
  imports: [FeedbackComponent],
  templateUrl: './feedback-container.component.html',
  styleUrl: './feedback-container.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(200%)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0px)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0px)' }),
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(200%)' })),
      ]),
    ]),
  ],
})
export class FeedbackContainerComponent {
  public feedbackContainerService = inject(FeedbackContainerService);
}
