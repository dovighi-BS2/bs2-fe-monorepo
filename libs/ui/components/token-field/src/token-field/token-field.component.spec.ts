import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenFieldComponent } from './token-field.component';

describe('TokenFieldComponent', () => {
  let component: TokenFieldComponent;
  let fixture: ComponentFixture<TokenFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TokenFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
