import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'card-assessment',
  standalone: true,
  imports: [ReactiveFormsModule, TextFieldModule],
  templateUrl: './card-assessment.component.html',
  styleUrl: './card-assessment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardAssessmentComponent {
  @Input() form: FormGroup;
  @Input() name = '';
  @Input() title = '';
  @Input() from = 1;
  @Input() to = 5;
  @Input() firstText = 'Muito ruim';
  @Input() lastText = 'Excelente';

  setRate(rate: number) {
    this.control.setValue(rate);
  }

  get rates() {
    const rates = Array(this.to)
      .fill(0)
      .map((_, index) => this.from + index);

    return rates.reverse();
  }

  get control() {
    return this.form?.get(this.name);
  }

  get getErrors(): string {
    if (!this.form || !this.control || this.control.untouched) return '';
    const errors = Object.values(this.control?.errors || {}).map((error) => error);
    return errors[0];
  }
}
