import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CurrencyFieldComponent } from './currency-field.component';

describe('CurrencyFieldComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrencyFieldComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
