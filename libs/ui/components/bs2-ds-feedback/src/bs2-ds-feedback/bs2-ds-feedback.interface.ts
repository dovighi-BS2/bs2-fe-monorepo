export interface Bs2DSFeedback {
  id?: number;
  status?: 'info' | 'attention' | 'error' | 'success';
  duration?: number;
  message?: string;
  class?: string;
}
