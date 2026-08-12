import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStepComponent } from './bs2-ds-step.component';

describe('Bs2DSStepComponent', () => {
  let component: Bs2DSStepComponent;
  let fixture: ComponentFixture<Bs2DSStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar inativo', () => {
    expect(component.active()).toBe(false);
  });

  it('deve ocultar o conteúdo quando inativo', () => {
    component.active.set(false);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).style.display).toBe('none');
  });

  it('deve exibir o conteúdo quando ativo', () => {
    component.active.set(true);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).style.display).toBe('');
  });
});
