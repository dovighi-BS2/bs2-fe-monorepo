import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSDividerComponent } from './bs2-ds-divider.component';

describe('Bs2DSDividerComponent', () => {
  let component: Bs2DSDividerComponent;
  let fixture: ComponentFixture<Bs2DSDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSDividerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
