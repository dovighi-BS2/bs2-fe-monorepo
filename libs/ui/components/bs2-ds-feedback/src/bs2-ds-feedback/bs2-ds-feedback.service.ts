import { Injectable } from '@angular/core';
import { Bs2DSFeedback } from './bs2-ds-feedback.interface';

@Injectable({
  providedIn: 'root',
})
export class Bs2DSFeedbackService {
  private default: Bs2DSFeedback = { duration: 5000, title: '', message: '', status: 'info', hasClose: true };
  public feedbackItems: Bs2DSFeedback[] = [];

  public info(feedbackItem: Bs2DSFeedback): void {
    this.add({ ...feedbackItem, status: 'info' });
  }

  public error(feedbackItem: Bs2DSFeedback): void {
    this.add({ ...feedbackItem, status: 'error' });
  }

  public success(feedbackItem: Bs2DSFeedback): void {
    this.add({ ...feedbackItem, status: 'success' });
  }

  public attention(feedbackItem: Bs2DSFeedback): void {
    this.add({ ...feedbackItem, status: 'attention' });
  }

  public custom(feedbackItem: Bs2DSFeedback): void {
    this.add(feedbackItem);
  }

  public removeByID(id: Bs2DSFeedback['id']) {
    this.feedbackItems = this.feedbackItems.filter((item) => item.id !== id);
  }

  public clear() {
    this.feedbackItems = [];
  }

  private add(feedbackItem: Bs2DSFeedback): void {
    feedbackItem.id = feedbackItem?.id ?? Math.random();
    this.feedbackItems = [...this.feedbackItems, { ...this.default, ...feedbackItem }];

    setTimeout(() => {
      this.feedbackItems = this.feedbackItems.filter((item) => item.id !== feedbackItem.id);
    }, feedbackItem.duration || 5000);
  }
}
