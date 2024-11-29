import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagComponent } from './tag.component';
import { By } from '@angular/platform-browser';

describe('TagComponent', () => {
  const testId = 'tag_text__test_id';

  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change tag class', () => {
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
