import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-ds-step-navigator-item',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-step-navigator-item.component.html',
  styleUrl: './bs2-ds-step-navigator-item.component.scss',
})
export class Bs2DSStepNavigatorItemComponent {
  @Input() lazy = false;

  public isActive = false;
}
