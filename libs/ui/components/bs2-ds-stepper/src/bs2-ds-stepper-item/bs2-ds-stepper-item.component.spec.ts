import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSStepperItemComponent } from './bs2-ds-stepper-item.component';

describe('Bs2DSStepperItemComponent', () => {
  let component: Bs2DSStepperItemComponent;
  let fixture: ComponentFixture<Bs2DSStepperItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSStepperItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSStepperItemComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('isError', () => {
    it('deve retornar true quando hasError for true', () => {
      fixture.componentRef.setInput('hasError', true);
      expect(component.isError()).toBe(true);
    });

    it('deve retornar false quando hasError for false', () => {
      fixture.componentRef.setInput('hasError', false);
      expect(component.isError()).toBe(false);
    });
  });

  describe('isDone', () => {
    it('deve retornar true quando não há erro e indexOfCurrent > index', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 2);
      expect(component.isDone()).toBe(true);
    });

    it('deve retornar false quando há erro', () => {
      fixture.componentRef.setInput('hasError', true);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 2);
      expect(component.isDone()).toBe(false);
    });

    it('deve retornar false quando indexOfCurrent <= index', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 2);
      fixture.componentRef.setInput('indexOfCurrent', 2);
      expect(component.isDone()).toBe(false);
    });
  });

  describe('isDoing', () => {
    it('deve retornar true quando não há erro e indexOfCurrent === index', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 1);
      expect(component.isDoing()).toBe(true);
    });

    it('deve retornar false quando há erro', () => {
      fixture.componentRef.setInput('hasError', true);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 1);
      expect(component.isDoing()).toBe(false);
    });

    it('deve retornar false quando indexOfCurrent !== index', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 2);
      expect(component.isDoing()).toBe(false);
    });
  });

  describe('isDefault', () => {
    it('deve retornar true quando não é done, doing nem error', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 2);
      fixture.componentRef.setInput('indexOfCurrent', 1);
      expect(component.isDefault()).toBe(true);
    });

    it('deve retornar false quando isDone for true', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 2);
      expect(component.isDone()).toBe(true);
      expect(component.isDefault()).toBe(false);
    });

    it('deve retornar false quando isDoing for true', () => {
      fixture.componentRef.setInput('hasError', false);
      fixture.componentRef.setInput('index', 1);
      fixture.componentRef.setInput('indexOfCurrent', 1);
      expect(component.isDoing()).toBe(true);
      expect(component.isDefault()).toBe(false);
    });

    it('deve retornar false quando isError for true', () => {
      fixture.componentRef.setInput('hasError', true);
      expect(component.isError()).toBe(true);
      expect(component.isDefault()).toBe(false);
    });
  });
});


  describe('isError', () => {
    it('deve retornar true quando hasError for true', () => {
      component.hasError = true;

      expect(component.isError).toBe(true);
    });

    it('deve retornar false quando hasError for false', () => {
      component.hasError = false;

      expect(component.isError).toBe(false);
    });
  });

  describe('isDone', () => {
    it('deve retornar true quando não há erro e indexOfCurrent > index', () => {
      component.hasError = false;
      component.index = 1;
      component.indexOfCurrent = 2;

      expect(component.isDone).toBe(true);
    });

    it('deve retornar false quando há erro', () => {
      component.hasError = true;
      component.index = 1;
      component.indexOfCurrent = 2;

      expect(component.isDone).toBe(false);
    });

    it('deve retornar false quando indexOfCurrent <= index', () => {
      component.hasError = false;
      component.index = 2;
      component.indexOfCurrent = 2;

      expect(component.isDone).toBe(false);
    });
  });

  describe('isDoing', () => {
    it('deve retornar true quando não há erro e indexOfCurrent === index', () => {
      component.hasError = false;
      component.index = 1;
      component.indexOfCurrent = 1;

      expect(component.isDoing).toBe(true);
    });

    it('deve retornar false quando há erro', () => {
      component.hasError = true;
      component.index = 1;
      component.indexOfCurrent = 1;

      expect(component.isDoing).toBe(false);
    });

    it('deve retornar false quando indexOfCurrent !== index', () => {
      component.hasError = false;
      component.index = 1;
      component.indexOfCurrent = 2;

      expect(component.isDoing).toBe(false);
    });
  });

  describe('isDefault', () => {
    it('deve retornar true quando não é done, doing nem error', () => {
      component.hasError = false;
      component.index = 2;
      component.indexOfCurrent = 1;

      expect(component.isDefault).toBe(true);
    });

    it('deve retornar false quando isDone for true', () => {
      component.hasError = false;
      component.index = 1;
      component.indexOfCurrent = 2;

      expect(component.isDone).toBe(true);
      expect(component.isDefault).toBe(false);
    });

    it('deve retornar false quando isDoing for true', () => {
      component.hasError = false;
      component.index = 1;
      component.indexOfCurrent = 1;

      expect(component.isDoing).toBe(true);
      expect(component.isDefault).toBe(false);
    });

    it('deve retornar false quando isError for true', () => {
      component.hasError = true;

      expect(component.isError).toBe(true);
      expect(component.isDefault).toBe(false);
    });
  });
});
