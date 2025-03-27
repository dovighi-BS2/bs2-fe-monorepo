import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Bs2DSInputCurrencyComponent } from './bs2-ds-input-currency.component';

describe('Bs2DSInputCurrencyComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Bs2DSInputCurrencyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
