import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'bs2-ds-card-rating',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bs2-ds-card-rating.component.html',
  styleUrl: './bs2-ds-card-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bs2DSCardRatingComponent {
  @Input() testId? = '';
  @Input() control: AbstractControl = new FormControl();
  @Input() title? = '';
  @Input() from = 1;
  @Input() to = 5;
  @Input() firstText? = 'Muito ruim';
  @Input() lastText? = 'Excelente';

  setRate(rate: number) {
    this.control.setValue(rate);
  }

  get rates() {
    return Array(this.to - this.from + 1)
      .fill(0)
      .map((_, index) => this.from + index)
      .reverse();
  }
}
