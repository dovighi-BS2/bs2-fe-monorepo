import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSRadioComponent } from './bs2-ds-radio.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSRadioComponent', () => {
  const testId = 'bs2_ds_radio_text__test_id';

  let component: Bs2DSRadioComponent;
  let fixture: ComponentFixture<Bs2DSRadioComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSRadioComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
