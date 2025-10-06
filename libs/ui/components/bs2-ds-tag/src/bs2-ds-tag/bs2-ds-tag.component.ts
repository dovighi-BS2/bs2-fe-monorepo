import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-ds-tag',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-tag.component.html',
  styleUrl: './bs2-ds-tag.component.scss',
})
export class Bs2DSTagComponent {
  @Input() testId?: string = '';
  @Input() status?: 'primary' | 'error' | 'success' | 'attention' | 'neutral' = 'neutral';
  @Input() size?: 'regular' | 'small' = 'regular';
  @Input() text?: string = '';
}
