import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSTagComponent } from './bs2-ds-tag.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSTagComponent', () => {
  let component: Bs2DSTagComponent;
  let fixture: ComponentFixture<Bs2DSTagComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`.bs2_ds_tag ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSTagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSTagComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change bs2_ds_tag class', () => {
    component.status = 'neutral';
    fixture.detectChanges();
    expect(get('').classList.contains('primary')).toBe(false);
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

    component.status = 'primary';
    fixture.detectChanges();
    expect(get('').classList.contains('attention')).toBe(false);
    expect(get('').classList.contains('primary')).toBe(true);
  });

  it('should change size class', () => {
    component.size = 'regular';
    fixture.detectChanges();
    expect(get('').classList.contains('small')).toBe(false);
    expect(get('').classList.contains('regular')).toBe(true);

    component.size = 'small';
    fixture.detectChanges();
    expect(get('').classList.contains('regular')).toBe(false);
    expect(get('').classList.contains('small')).toBe(true);
  });
});
