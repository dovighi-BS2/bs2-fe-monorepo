import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2TextInputComponent } from './bs2-text-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Bs2TextInputComponent', () => {
  let component: Bs2TextInputComponent;
  let fixture: ComponentFixture<Bs2TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2TextInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
