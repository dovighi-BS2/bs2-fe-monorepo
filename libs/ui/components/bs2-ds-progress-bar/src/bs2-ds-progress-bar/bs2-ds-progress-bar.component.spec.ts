import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSProgressBarComponent } from './bs2-ds-progress-bar.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSProgressBarComponent', () => {
  let component: Bs2DSProgressBarComponent;
  let fixture: ComponentFixture<Bs2DSProgressBarComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`.bs2_ds_progress ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSProgressBarComponent);
    component = fixture.componentInstance;

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
    expect(get('.bs2_ds_progress__bar').style.width).toBe('10%');

    component.percent = 90;
    fixture.detectChanges();
    expect(get('.bs2_ds_progress__bar').style.width).toBe('90%');
  });
});
