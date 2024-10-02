import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputCurrencyComponent } from './input-currency.component';

describe('InputCurrencyComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InputCurrencyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
