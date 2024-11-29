import { Injectable } from '@angular/core';
import { FeedbackItem } from '../feedback-item/feedback-item.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedbackContainerService {
  private default: FeedbackItem = { duration: 5000, message: '', status: 'info', type: 'toast' };
  public feedbackItems: FeedbackItem[] = [];

  add(feedbackItem: FeedbackItem) {
    feedbackItem.id = Math.random();
    this.feedbackItems = [...this.feedbackItems, { ...this.default, ...feedbackItem, class: 'in' }];

    setTimeout(() => {
      this.feedbackItems = this.feedbackItems.filter((item) => item.id !== feedbackItem.id);
    }, feedbackItem.duration || 5000);
  }
}
