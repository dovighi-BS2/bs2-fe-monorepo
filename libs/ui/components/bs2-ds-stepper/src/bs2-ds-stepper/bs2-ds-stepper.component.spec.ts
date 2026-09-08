import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStepperComponent } from './bs2-ds-stepper.component';

describe('Bs2DSStepperComponent', () => {
  let component: Bs2DSStepperComponent;
  let fixture: ComponentFixture<Bs2DSStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Valores padrão', () => {
    it('deve iniciar com currentIndex em 0', () => {
      expect(component.currentIndex()).toBe(0);
    });

    it('deve iniciar com horizontal false', () => {
      expect(component.horizontal()).toBe(false);
    });

    it('deve iniciar com gap null', () => {
      expect(component.gap()).toBeNull();
    });
  });

  describe('next()', () => {
    it('não deve ultrapassar o número de steps', () => {
      component.next();
      expect(component.currentIndex()).toBe(0);
    });
  });

  describe('prev()', () => {
    it('não deve ir abaixo de 0', () => {
      component.prev();
      expect(component.currentIndex()).toBe(0);
    });
  });
});


  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Inputs default', () => {
    it('deve iniciar com valores padrão', () => {
      expect(component.items).toEqual([]);
      expect(component.horizontal).toBe(false);
    });
  });

  describe('projectedItems setter', () => {
    it('deve atualizar items quando QueryList tiver itens', () => {
      const item1 = new Bs2DSStepperItemComponent();
      const item2 = new Bs2DSStepperItemComponent();

      const queryList = new QueryList<Bs2DSStepperItemComponent>();
      queryList.reset([item1, item2]);

      component.projectedItems = queryList;

      expect(component.items).toEqual([item1, item2]);
    });

    it('não deve alterar items quando QueryList estiver vazio', () => {
      const initialItems = [new Bs2DSStepperItemComponent()];
      component.items = initialItems;

      const emptyQueryList = new QueryList<Bs2DSStepperItemComponent>();
      emptyQueryList.reset([]);

      component.projectedItems = emptyQueryList;

      expect(component.items).toBe(initialItems);
    });

    it('não deve alterar items quando QueryList for undefined', () => {
      const initialItems = [new Bs2DSStepperItemComponent()];
      component.items = initialItems;

      component.projectedItems = undefined as any;

      expect(component.items).toBe(initialItems);
    });
  });
});
