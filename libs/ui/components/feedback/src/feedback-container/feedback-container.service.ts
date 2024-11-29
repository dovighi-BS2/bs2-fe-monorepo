import { Injectable } from '@angular/core';
import { Feedback } from '../feedback/feedback.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedbackContainerService {
  private default: Feedback = { duration: 5000, message: '', status: 'info', type: 'toast' };
  public feedbackItems: Feedback[] = [];

  add(feedbackItem: Feedback) {
    feedbackItem.id = Math.random();
    this.feedbackItems = [...this.feedbackItems, { ...this.default, ...feedbackItem, class: 'in' }];

    setTimeout(() => {
      this.feedbackItems = this.feedbackItems.filter((item) => item.id !== feedbackItem.id);
    }, feedbackItem.duration || 5000);
  }
}
