import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSTabGroupComponent } from './bs2-ds-tab-group.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSTabGroupComponent', () => {
  const testId = 'bs2_ds_tab_group_text__test_id';

  let component: Bs2DSTabGroupComponent;
  let fixture: ComponentFixture<Bs2DSTabGroupComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSTabGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSTabGroupComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
