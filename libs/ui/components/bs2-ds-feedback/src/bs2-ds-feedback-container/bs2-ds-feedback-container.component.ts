import { Component, inject } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Bs2DSFeedbackComponent } from '../bs2-ds-feedback/bs2-ds-feedback.component';
import { Bs2DSFeedbackService } from '../bs2-ds-feedback/bs2-ds-feedback.service';

@Component({
  selector: 'bs2-ds-feedback-container',
  standalone: true,
  imports: [Bs2DSFeedbackComponent],
  templateUrl: './bs2-ds-feedback-container.component.html',
  styleUrl: './bs2-ds-feedback-container.component.scss',
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
export class Bs2DSFeedbackContainerComponent {
  public feedbackService = inject(Bs2DSFeedbackService);
}
