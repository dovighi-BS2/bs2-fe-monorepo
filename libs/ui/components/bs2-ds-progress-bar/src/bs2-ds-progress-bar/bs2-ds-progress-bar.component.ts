import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-ds-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-progress-bar.component.html',
  styleUrl: './bs2-ds-progress-bar.component.scss',
})
export class Bs2DSProgressBarComponent {
  @Input() testId?: string = '';
  @Input() loop?: boolean = false;
  @Input() percent?: number = 0;
}
