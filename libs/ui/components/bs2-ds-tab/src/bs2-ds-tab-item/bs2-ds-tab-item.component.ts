import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs2-ds-tab-item',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-tab-item.component.html',
  styleUrl: './bs2-ds-tab-item.component.scss',
})
export class Bs2DSTabItemComponent {
  @Input() testId?: string = '';
  @Input() title?: string = '';
  @Input() isActive?: boolean = false;
}
