export interface Feedback {
  id?: number;
  status?: 'info' | 'attention' | 'error' | 'success';
  duration?: number;
  message?: string;
  type?: 'static' | 'toast';
  class?: string;
}
