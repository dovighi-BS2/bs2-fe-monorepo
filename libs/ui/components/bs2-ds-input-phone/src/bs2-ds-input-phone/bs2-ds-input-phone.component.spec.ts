import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSInputPhoneComponent } from './bs2-ds-input-phone.component';

describe('Bs2DSInputPhoneComponent', () => {
  let component: Bs2DSInputPhoneComponent;
  let fixture: ComponentFixture<Bs2DSInputPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
