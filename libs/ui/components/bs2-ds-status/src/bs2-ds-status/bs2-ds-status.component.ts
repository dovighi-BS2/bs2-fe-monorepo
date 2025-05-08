import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-ds-status',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-status.component.html',
  styleUrl: './bs2-ds-status.component.scss',
})
export class Bs2DSStatusComponent {
  @Input() testId?: string = '';
  @Input() status?: 'error' | 'success' | 'attention' | 'neutral' = 'neutral';
  @Input() text?: string = '';
}
