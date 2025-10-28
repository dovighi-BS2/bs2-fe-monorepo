import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStepNavigatorItemComponent } from './bs2-ds-step-navigator-item.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSStepNavigatorItemComponent', () => {
  const testId = 'bs2_ds_step-navigator_item_text__test_id';

  let component: Bs2DSStepNavigatorItemComponent;
  let fixture: ComponentFixture<Bs2DSStepNavigatorItemComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepNavigatorItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepNavigatorItemComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
