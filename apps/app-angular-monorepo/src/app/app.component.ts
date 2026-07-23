import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bs2DSInputTextComponent } from '@bs2/design-system/components/bs2-ds-input-text';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, Bs2DSInputTextComponent],
})
export class AppComponent {
  title = 'app-angular-monorepo';

  debugControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
}
