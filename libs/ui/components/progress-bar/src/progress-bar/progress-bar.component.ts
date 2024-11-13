import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() testId?: string = '';
  @Input() loop?: boolean = false;
  @Input() percent?: number = 0;
}
