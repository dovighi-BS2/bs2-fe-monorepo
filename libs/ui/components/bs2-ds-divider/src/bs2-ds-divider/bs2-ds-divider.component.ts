import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-ds-divider',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-divider.component.html',
  styleUrl: './bs2-ds-divider.component.scss',
})
export class Bs2DSDividerComponent {
  @Input() testId?: string = '';
  @Input() space?: number = 20;
}
