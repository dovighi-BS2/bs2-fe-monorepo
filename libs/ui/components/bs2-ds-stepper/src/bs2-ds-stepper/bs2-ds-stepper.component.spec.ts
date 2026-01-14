import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueryList } from '@angular/core';
import { Bs2DSStepperComponent } from './bs2-ds-stepper.component';
import { Bs2DSStepperItemComponent } from '../bs2-ds-stepper-item/bs2-ds-stepper-item.component';

describe('Bs2DSStepperComponent', () => {
  let component: Bs2DSStepperComponent;
  let fixture: ComponentFixture<Bs2DSStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepperComponent);
    component = fixture.componentInstance;
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
