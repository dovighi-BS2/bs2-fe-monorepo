import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSTabItemComponent } from './bs2-ds-tab-item.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSTabItemComponent', () => {
  const testId = 'bs2_ds_tab_item_text__test_id';

  let component: Bs2DSTabItemComponent;
  let fixture: ComponentFixture<Bs2DSTabItemComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSTabItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSTabItemComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
