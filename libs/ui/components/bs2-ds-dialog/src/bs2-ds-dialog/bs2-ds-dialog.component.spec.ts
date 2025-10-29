import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DsDialogComponent, DialogData } from './bs2-ds-dialog.component';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgTemplateOutlet } from '@angular/common';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';

@Component({
  template: `<ng-template #templateRef>Template</ng-template>`,
})
class HostComponent {
  @ViewChild('templateRef', { static: true }) templateRef!: TemplateRef<any>;
}

describe('Bs2DsDialogComponent', () => {
  let component: Bs2DsDialogComponent;
  let fixture: ComponentFixture<Bs2DsDialogComponent>;
  let dialogRefMock: any;

  const defaultData: DialogData = {
    title: 'Título do diálogo',
    content: 'Texto do diálogo',
    primaryText: 'Confirmar',
    secondaryText: 'Cancelar',
    showIcon: true,
  };

  beforeEach(async () => {
    dialogRefMock = { close: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [Bs2DsDialogComponent, NgTemplateOutlet, Bs2DSFilledButtonDirective, Bs2DSOutlinedButtonDirective],
      providers: [
        { provide: DialogRef, useValue: dialogRefMock },
        { provide: DIALOG_DATA, useValue: defaultData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the dialog component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const titleEl = fixture.debugElement.query(By.css('.dialog__title')).nativeElement;
    expect(titleEl.textContent).toBe(defaultData.title);
  });

  it('should render content string', () => {
    component.data.content = 'Texto de teste';
    fixture.detectChanges();

    const contentP = fixture.debugElement.query(By.css('.dialog__template-content p'));
    expect(contentP).toBeTruthy();
    expect(contentP.nativeElement.textContent).toBe('Texto de teste');
  });

  it('should not render content div when content is undefined', () => {
    component.data.content = undefined;
    fixture.detectChanges();

    const contentDiv = fixture.debugElement.query(By.css('.dialog__template-content'));
    expect(contentDiv).toBeNull();
  });

  it('should render default icon when showIcon is true and iconTemplate is undefined', () => {
    component.data.showIcon = true;
    component.data.iconTemplate = undefined;
    fixture.detectChanges();

    const iconEl = fixture.debugElement.query(By.css('.dialog__content p'));
    expect(iconEl).toBeTruthy();
    expect(iconEl.nativeElement.textContent.trim()).toBe('Ícone');
  });

  it('should not render icon when showIcon is false', () => {
    component.data.showIcon = false;
    component.data.iconTemplate = undefined;
    fixture.detectChanges();

    const iconEl = fixture.debugElement.query(By.css('.dialog__content p'));
    expect(iconEl).toBeNull();
  });

  it('should render primary button', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn).toBeTruthy();
    expect(btn.nativeElement.textContent.trim()).toBe(defaultData.primaryText);
  });

  it('should render secondary button when secondaryText is defined', () => {
    component.data.secondaryText = 'Cancelar';
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.dialog__button--secondary'));
    expect(btn).toBeTruthy();
    expect(btn.nativeElement.textContent.trim()).toBe('Cancelar');
  });

  it('should not render secondary button when secondaryText is undefined', () => {
    component.data.secondaryText = undefined;
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.dialog__button--secondary'));
    expect(btn).toBeNull();
  });

  it('should close dialog with primary action', () => {
    component.onPrimary();
    expect(dialogRefMock.close).toHaveBeenCalledWith({ action: 'primary' });
  });

  it('should close dialog with secondary action', () => {
    component.onSecondary();
    expect(dialogRefMock.close).toHaveBeenCalledWith({ action: 'secondary' });
  });

  it('should identify content as TemplateRef', () => {
    const hostFixture = TestBed.createComponent(HostComponent);
    const hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

    component.data.content = hostComponent.templateRef;
    fixture.detectChanges();

    expect(component.isTemplate).toBe(true);
    expect(component.templateContent).toBe(hostComponent.templateRef);
  });

  it('should identify content as string', () => {
    component.data.content = 'Texto simples';
    fixture.detectChanges();

    expect(component.isTemplate).toBe(false);
    expect(component.templateContent).toBeNull();
  });
});
