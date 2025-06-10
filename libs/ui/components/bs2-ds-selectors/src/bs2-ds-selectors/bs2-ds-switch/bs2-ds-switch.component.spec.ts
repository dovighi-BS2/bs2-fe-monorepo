import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSSwitchComponent } from './bs2-ds-switch.component';
import { By } from '@angular/platform-browser';

describe('Bs2DSSwitchComponent', () => {
  const testId = 'bs2_ds_switch_text__test_id';

  let component: Bs2DSSwitchComponent;
  let fixture: ComponentFixture<Bs2DSSwitchComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSSwitchComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
