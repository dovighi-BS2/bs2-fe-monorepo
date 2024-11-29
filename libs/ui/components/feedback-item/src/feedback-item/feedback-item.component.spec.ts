import { FeedbackItemComponent } from './feedback-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('FeedbackItemComponent', () => {
  const testId = 'feedback_item__test_id';

  let component: FeedbackItemComponent;
  let fixture: ComponentFixture<FeedbackItemComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackItemComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
