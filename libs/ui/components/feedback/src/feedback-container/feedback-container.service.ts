import { Injectable } from '@angular/core';
import { Feedback } from '../feedback/feedback.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedbackContainerService {
  private default: Feedback = { duration: 5000, message: '', status: 'info', type: 'toast' };
  public feedbackItems: Feedback[] = [];

  public info(feedbackItem: Feedback): void {
    this.add({ ...feedbackItem, status: 'info' });
  }

  public error(feedbackItem: Feedback): void {
    this.add({ ...feedbackItem, status: 'error' });
  }

  public success(feedbackItem: Feedback): void {
    this.add({ ...feedbackItem, status: 'success' });
  }

  public attention(feedbackItem: Feedback): void {
    this.add({ ...feedbackItem, status: 'attention' });
  }

  public removeByID(id: Feedback['id']) {
    this.feedbackItems = this.feedbackItems.filter((item) => item.id !== id);
  }

  public clear() {
    this.feedbackItems = [];
  }

  private add(feedbackItem: Feedback): void {
    feedbackItem.id = feedbackItem?.id ?? Math.random();
    this.feedbackItems = [...this.feedbackItems, { ...this.default, ...feedbackItem }];

    setTimeout(() => {
      this.feedbackItems = this.feedbackItems.filter((item) => item.id !== feedbackItem.id);
    }, feedbackItem.duration || 5000);
  }
}
