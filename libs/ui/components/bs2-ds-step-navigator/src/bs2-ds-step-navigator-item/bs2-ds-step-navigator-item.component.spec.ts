import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStepNavigatorItemComponent } from './bs2-ds-step-navigator-item.component';

describe('Bs2DSStepNavigatorItemComponent', () => {
  let component: Bs2DSStepNavigatorItemComponent;
  let fixture: ComponentFixture<Bs2DSStepNavigatorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepNavigatorItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepNavigatorItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
