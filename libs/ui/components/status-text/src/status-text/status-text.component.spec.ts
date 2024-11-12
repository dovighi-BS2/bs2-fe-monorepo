import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusTextComponent } from './status-text.component';
import { By } from '@angular/platform-browser';

describe('StatusTextComponent', () => {
  const testId = 'chips_checkbox__test_id';

  let component: StatusTextComponent;
  let fixture: ComponentFixture<StatusTextComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusTextComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change status class', () => {
    component.status = 'neutral';
    fixture.detectChanges();
    expect(get('').classList.contains('attention')).toBe(false);
    expect(get('').classList.contains('neutral')).toBe(true);

    component.status = 'error';
    fixture.detectChanges();
    expect(get('').classList.contains('neutral')).toBe(false);
    expect(get('').classList.contains('error')).toBe(true);

    component.status = 'success';
    fixture.detectChanges();
    expect(get('').classList.contains('error')).toBe(false);
    expect(get('').classList.contains('success')).toBe(true);

    component.status = 'attention';
    fixture.detectChanges();
    expect(get('').classList.contains('success')).toBe(false);
    expect(get('').classList.contains('attention')).toBe(true);
  });
});
