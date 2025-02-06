import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSInputTokenComponent } from './bs2-ds-input-token.component';

describe('Bs2DSInputTokenComponent', () => {
  let component: Bs2DSInputTokenComponent;
  let fixture: ComponentFixture<Bs2DSInputTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
