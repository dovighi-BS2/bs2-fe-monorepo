import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSCheckboxComponent } from './bs2-ds-checkbox.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSCheckboxComponent', () => {
  const testId = 'bs2_ds_checkbox_text__test_id';

  let component: Bs2DSCheckboxComponent;
  let fixture: ComponentFixture<Bs2DSCheckboxComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSCheckboxComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
