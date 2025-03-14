import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  @Input() form: FormGroup;
  @Input() name = '';
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

  get control() {
    return this.form?.get(this.name);
  }
}
