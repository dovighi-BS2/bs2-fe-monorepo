import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStepNavigatorGroupComponent } from './bs2-ds-step-navigator-group.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSStepNavigatorGroupComponent', () => {
  const testId = 'bs2_ds_step-navigator_group_text__test_id';

  let component: Bs2DSStepNavigatorGroupComponent;
  let fixture: ComponentFixture<Bs2DSStepNavigatorGroupComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepNavigatorGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepNavigatorGroupComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
