import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStatusComponent } from './bs2-ds-status.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSStatusComponent', () => {
  let component: Bs2DSStatusComponent;
  let fixture: ComponentFixture<Bs2DSStatusComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`.bs2_ds_status ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStatusComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change bs2_ds_status class', () => {
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
