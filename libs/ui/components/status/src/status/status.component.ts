import { Component, Input } from '@angular/core';

@Component({
  selector: 'status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  @Input() testId?: string = '';
  @Input() status?: 'error' | 'success' | 'attention' | 'neutral' = 'neutral';
  @Input() text?: string = '';
}
