import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSDividerComponent } from './bs2-ds-divider.component';

describe('Bs2DSDividerComponent', () => {
  const testId = 'bs2_ds_divider__test_id';

  let component: Bs2DSDividerComponent;
  let fixture: ComponentFixture<Bs2DSDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSDividerComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
