import { FeedbackComponent } from './feedback.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('FeedbackComponent', () => {
  const testId = 'feedback__test_id';

  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove component on [duration] end', fakeAsync(() => {
    component.duration = 10;
    component.ngOnInit();
    fixture.detectChanges();
    expect(!!get(``)).toBe(true);

    tick(11);
    fixture.detectChanges();
    expect(!!get(``)).toBe(false);
  }));

  it('should change [status] class', () => {
    component.status = 'attention';
    fixture.detectChanges();
    expect(get(``).classList.contains('attention'));

    component.status = 'info';
    fixture.detectChanges();
    expect(get(``).classList.contains('info'));

    component.status = 'error';
    fixture.detectChanges();
    expect(get(``).classList.contains('error'));

    component.status = 'success';
    fixture.detectChanges();
    expect(get(``).classList.contains('success'));
  });

  it('should change [message] text', () => {
    component.message = 'teste 1';
    fixture.detectChanges();
    expect(get(``).textContent.trim()).toBe('teste 1');

    component.message = 'teste 2';
    fixture.detectChanges();
    expect(get(``).textContent.trim()).toBe('teste 2');

    component.message = 'teste 3';
    fixture.detectChanges();
    expect(get(``).textContent.trim()).toBe('teste 3');
  });

  it('should execute [close] right', () => {
    expect(!!get(``)).toBe(true);
    component.close();
    fixture.detectChanges();
    expect(!!get(``)).toBe(false);
  });
});
