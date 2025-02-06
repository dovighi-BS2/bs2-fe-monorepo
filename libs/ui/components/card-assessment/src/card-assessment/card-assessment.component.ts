import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'card-assessment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-assessment.component.html',
  styleUrl: './card-assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardAssessmentComponent {
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
