export interface Feedback {
  id?: number;
  status?: 'info' | 'attention' | 'error' | 'success';
  duration?: number;
  message?: string;
  class?: string;
}
