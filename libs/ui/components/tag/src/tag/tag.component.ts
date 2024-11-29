import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() testId?: string = '';
  @Input() status?: 'primary' | 'error' | 'success' | 'attention' | 'neutral' = 'neutral';
  @Input() size?: 'regular' | 'small' = 'regular';
  @Input() text?: string = '';
}
