import { Component, Input } from '@angular/core';

@Component({
  selector: 'divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {
  @Input() testId?: string = '';
  @Input() space?: number = 20;
}
