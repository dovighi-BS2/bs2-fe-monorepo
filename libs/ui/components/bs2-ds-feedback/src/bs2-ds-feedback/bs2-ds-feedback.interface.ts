export interface Bs2DSFeedback {
  id?: number;
  status?: 'info' | 'attention' | 'error' | 'success';
  icon?: string;
  duration?: number;
  title?: string;
  message?: string;
  class?: string;
  hasClose?: boolean;
}
