import { QueryList } from '@angular/core';
import { Bs2DSStepNavigatorGroupComponent } from './bs2-ds-step-navigator-group.component';
import { Bs2DSStepNavigatorItemComponent } from '../bs2-ds-step-navigator-item/bs2-ds-step-navigator-item.component';

jest.useFakeTimers();

describe('Bs2DSStepNavigatorGroupComponent', () => {
  let component: Bs2DSStepNavigatorGroupComponent;
  let items: Bs2DSStepNavigatorItemComponent[];

  beforeEach(() => {
    component = new Bs2DSStepNavigatorGroupComponent();
    items = Array.from({ length: 3 }).map(() => ({ isActive: false } as Bs2DSStepNavigatorItemComponent));

    const queryList = new QueryList<Bs2DSStepNavigatorItemComponent>();
    (queryList as any)._results = items;
    (queryList as any)._dirty = false;
    queryList.notifyOnChanges();

    // 🔧 Força o length (mock para Jest)
    Object.defineProperty(queryList, 'length', { get: () => items.length });

    component.items = queryList;
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it('deve inicializar com valores padrões', () => {
    expect(component.activatedIndex).toBe(0);
    expect(component.auto).toBe(false);
    expect(component.loop).toBe(false);
    expect(component.timer).toBe(5000);
  });

  it('deve ativar o item correspondente no ngAfterViewInit', () => {
    component.activatedIndex = 1;
    component.ngAfterViewInit();
    expect(items[1].isActive).toBe(true);
  });

  it('deve ativar o item que já está ativo antes do ngAfterViewInit', () => {
    items[2].isActive = true;
    component.ngAfterViewInit();
    expect(component.activatedIndex).toBe(2);
    expect(items[2].isActive).toBe(true);
  });

  it('deve iniciar o intervalo quando auto=true', () => {
    component.auto = true;
    const spy = jest.spyOn(global, 'setInterval');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledWith(expect.any(Function), 5000);
  });

  it('deve limpar o intervalo no ngOnDestroy', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    component.interval = setInterval(() => {}, 1000);
    const spy = jest.spyOn(global, 'clearInterval');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

  it('deve alterar o item ativo com goTo()', () => {
    const refreshSpy = jest.spyOn(component, 'refresh');
    component.goTo(2);
    expect(component.activatedIndex).toBe(2);
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('deve reiniciar o intervalo em goTo() quando auto=true', () => {
    component.auto = true;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    component.interval = setInterval(() => {}, 1000);
    const clearSpy = jest.spyOn(global, 'clearInterval');
    const setSpy = jest.spyOn(global, 'setInterval');
    component.goTo(1);
    expect(clearSpy).toHaveBeenCalled();
    expect(setSpy).toHaveBeenCalled();
  });

  it('refresh() deve atualizar isActive corretamente', () => {
    component.activatedIndex = 1;
    component.refresh();
    expect(items[0].isActive).toBe(false);
    expect(items[1].isActive).toBe(true);
  });

  it('previous() deve voltar um passo', () => {
    component.activatedIndex = 2;
    const goToSpy = jest.spyOn(component, 'goTo');
    component.previous();
    expect(goToSpy).toHaveBeenCalledWith(1);
  });

  it('previous() deve retornar ao último item se loop=true e está no primeiro', () => {
    component.loop = true;
    component.activatedIndex = 0;
    const goToSpy = jest.spyOn(component, 'goTo');
    component.previous();
    expect(goToSpy).toHaveBeenCalledWith(2); // ✅ agora passa
  });

  it('previous() não deve fazer nada se for o primeiro e loop=false', () => {
    component.loop = false;
    component.activatedIndex = 0;
    const goToSpy = jest.spyOn(component, 'goTo');
    component.previous();
    expect(goToSpy).not.toHaveBeenCalled();
  });

  it('next() deve avançar um passo', () => {
    component.activatedIndex = 1;
    const goToSpy = jest.spyOn(component, 'goTo');
    component.next();
    expect(goToSpy).toHaveBeenCalledWith(2); // ✅ agora passa
  });

  it('next() deve ir para o primeiro item se loop=true e está no último', () => {
    component.loop = true;
    component.activatedIndex = 2;
    const goToSpy = jest.spyOn(component, 'goTo');
    component.next();
    expect(goToSpy).toHaveBeenCalledWith(0);
  });

  it('next() não deve fazer nada se for o último e loop=false', () => {
    component.loop = false;
    component.activatedIndex = 2;
    const goToSpy = jest.spyOn(component, 'goTo');
    component.next();
    expect(goToSpy).not.toHaveBeenCalled();
  });

  it('isFirst deve retornar true somente quando activatedIndex <= 0', () => {
    component.activatedIndex = 0;
    expect(component.isFirst).toBe(true);
    component.activatedIndex = 1;
    expect(component.isFirst).toBe(false);
  });

  it('isLast deve retornar true somente quando activatedIndex >= items.length - 1', () => {
    component.activatedIndex = 2;
    expect(component.isLast).toBe(true);
    component.activatedIndex = 1;
    expect(component.isLast).toBe(false);
  });
});
