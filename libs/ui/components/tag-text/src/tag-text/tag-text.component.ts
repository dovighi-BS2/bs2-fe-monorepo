import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-text',
  standalone: true,
  imports: [],
  templateUrl: './tag-text.component.html',
  styleUrl: './tag-text.component.scss',
})
export class TagTextComponent {
  @Input() testId?: string = '';
  @Input() status?: 'primary' | 'error' | 'success' | 'attention' | 'neutral' = 'neutral';
  @Input() size?: 'regular' | 'small' = 'regular';
  @Input() text?: string = '';
}
