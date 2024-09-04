import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  SelectInputComponent,
  SelectInputOption,
} from '@bs2-fe-monorepo/ui/components/select-input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    SelectInputComponent,
    ReactiveFormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'app-angular-monorepo';

  form!: FormGroup;
  public categories: SelectInputOption[] = [
    { value: 'Categoria 1', text: 'Categoria 1' },
    { value: 'Categoria 2', text: 'Categoria 2' },
    { value: 'Categoria 3', text: 'Categoria 3' },
    { value: 'Categoria 4', text: 'Categoria 4' },
    { value: 'Categoria 5', text: 'Categoria 5' },
  ];

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      categories: ['', [CustomValidators.required]],
    });
  }
}
