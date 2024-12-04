import { fakeAsync, tick } from '@angular/core/testing';
import { FeedbackService } from './feedback.service';

describe('FeedbackService', () => {
  let service: FeedbackService;

  beforeEach(() => {
    service = new FeedbackService();
  });

  it('should ', () => {
    expect(1).toBe(1);
  });

  it('should execute [info] right', () => {
    service.feedbackItems = [];
    service.info({ id: 1, message: '' });
    expect(!!service.feedbackItems.find((item) => item.id === 1)).toBe(true);
    expect(service.feedbackItems.find((item) => item.id === 1)?.status).toBe('info');
  });

  it('should execute [error] right', () => {
    service.feedbackItems = [];
    service.error({ id: 1, message: '' });
    expect(!!service.feedbackItems.find((item) => item.id === 1)).toBe(true);
    expect(service.feedbackItems.find((item) => item.id === 1)?.status).toBe('error');
  });

  it('should execute [success] right', () => {
    service.feedbackItems = [];
    service.success({ id: 1, message: '' });
    expect(!!service.feedbackItems.find((item) => item.id === 1)).toBe(true);
    expect(service.feedbackItems.find((item) => item.id === 1)?.status).toBe('success');
  });

  it('should execute [attention] right', () => {
    service.feedbackItems = [];
    service.attention({ id: 1, message: '' });
    expect(!!service.feedbackItems.find((item) => item.id === 1)).toBe(true);
    expect(service.feedbackItems.find((item) => item.id === 1)?.status).toBe('attention');
  });

  it('should execute [removeByID] right', () => {
    service.feedbackItems = [];
    service.attention({ id: 1, message: '' });
    expect(!!service.feedbackItems.find((item) => item.id === 1)).toBe(true);
    expect(service.feedbackItems.length).toBe(1);

    service.removeByID(1);
    expect(service.feedbackItems.length).toBe(0);
  });

  it('should execute [clear] right', () => {
    service.feedbackItems = [];
    service.info({ id: 1, message: '' });
    service.info({ id: 2, message: '' });
    service.info({ id: 3, message: '' });
    service.info({ id: 4, message: '' });

    expect(service.feedbackItems.length).toBe(4);

    service.clear();
    expect(service.feedbackItems.length).toBe(0);
  });

  it('should execute [add] right', fakeAsync(() => {
    service.feedbackItems = [];

    service['add']({ id: 1, message: '', duration: 10, status: 'info' });
    service['add']({ id: 2, message: '', duration: 10, status: 'attention' });
    service['add']({ id: 3, message: '', duration: 10, status: 'error' });
    service['add']({ id: 4, message: '', duration: 10, status: 'success' });

    expect(service.feedbackItems.length).toBe(4);
    expect(service.feedbackItems.find((item) => item.id === 1)?.status).toBe('info');
    expect(service.feedbackItems.find((item) => item.id === 2)?.status).toBe('attention');
    expect(service.feedbackItems.find((item) => item.id === 3)?.status).toBe('error');
    expect(service.feedbackItems.find((item) => item.id === 4)?.status).toBe('success');

    tick(11);
    expect(service.feedbackItems.length).toBe(0);
  }));
});
