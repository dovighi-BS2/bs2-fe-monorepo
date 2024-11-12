import { Component, Input } from '@angular/core';

@Component({
  selector: 'status-text',
  standalone: true,
  imports: [],
  templateUrl: './status-text.component.html',
  styleUrl: './status-text.component.scss',
})
export class StatusTextComponent {
  @Input() testId?: string = '';
  @Input() status?: 'error' | 'success' | 'attention' | 'neutral' = 'neutral';
  @Input() text?: string = '';
}
