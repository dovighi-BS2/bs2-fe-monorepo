import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-divider',
  standalone: true,
  imports: [],
  templateUrl: './content-divider.component.html',
  styleUrl: './content-divider.component.scss',
})
export class ContentDividerComponent {
  @Input() testId?: string = '';
  @Input() space?: number = 20;
}
