import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {
  const testId = 'progress_bar__test_id';

  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change loop class', () => {
    component.loop = true;
    fixture.detectChanges();
    expect(get('').classList.contains('loop')).toBe(true);

    component.loop = false;
    fixture.detectChanges();
    expect(get('').classList.contains('loop')).toBe(false);
  });

  it('should change percentage width of the bar', () => {
    component.percent = 10;
    fixture.detectChanges();
    expect(get('.progress__bar').style.width).toBe('10%');

    component.percent = 90;
    fixture.detectChanges();
    expect(get('.progress__bar').style.width).toBe('90%');
  });
});
