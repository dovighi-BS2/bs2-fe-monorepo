import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectInputComponent } from './select-input.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';

describe('SelectInputComponent', () => {
  const testId = 'select_input__test_id';

  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(selector))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInputComponent, ReactiveFormsModule, CdkListboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInputComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
