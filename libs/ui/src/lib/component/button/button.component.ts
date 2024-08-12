import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type = 'type';
  @Input() design: 'filled' | 'outlined' | 'flat' = 'filled';
  @Input() disabled = false;
  @Input() tabindex = 0;
  @Input() id = '';
  @Input() testId = '';
  @Input() class = '';
  @Input() ariaLabel = '';

  @Output() clicked = new EventEmitter<any>();
}
