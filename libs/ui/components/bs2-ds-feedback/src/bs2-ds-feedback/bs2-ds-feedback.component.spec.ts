import { Bs2DSFeedbackComponent } from './bs2-ds-feedback.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Bs2DSFeedbackComponent', () => {
  const testId = 'bs2-ds-feedback__test_id';

  let component: Bs2DSFeedbackComponent;
  let fixture: ComponentFixture<Bs2DSFeedbackComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSFeedbackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSFeedbackComponent);
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

  it('should change [title] text', () => {
    component.title = 'teste 1';
    fixture.detectChanges();
    expect(get(``).textContent.trim()).toBe('teste 1');

    component.title = 'teste 2';
    fixture.detectChanges();
    expect(get(``).textContent.trim()).toBe('teste 2');

    component.title = 'teste 3';
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
