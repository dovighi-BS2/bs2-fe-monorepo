import { Bs2DSFeedbackContainerComponent } from './bs2-ds-feedback-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Bs2DSFeedbackContainerComponent', () => {
  let component: Bs2DSFeedbackContainerComponent;
  let fixture: ComponentFixture<Bs2DSFeedbackContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSFeedbackContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSFeedbackContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
