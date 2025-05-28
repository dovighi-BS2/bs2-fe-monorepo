export interface Bs2DSFeedback {
  id?: number;
  status?: 'info' | 'attention' | 'error' | 'success';
  duration?: number;
  title?: string;
  message?: string;
  class?: string;
}
