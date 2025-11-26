import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSTooltipRichDirective } from './bs2-ds-tooltip-rich.directive';

@Component({
  template: `
    <ng-template #tooltipContent>
      <span class="tooltip-text">Tooltip Content</span>
    </ng-template>

    <div [bs2-ds-tooltip-rich]="tooltipContent" #hostElement>Hover me</div>
  `,
  standalone: true,
  imports: [Bs2DSTooltipRichDirective],
})
class TestHostComponent {
  @ViewChild('tooltipContent', { static: true }) tooltipContent!: TemplateRef<any>;
  @ViewChild('hostElement', { static: true }) hostElement!: any;
}

describe('Bs2DSTooltipRichDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('deve criar a diretiva com sucesso', () => {
    const div = fixture.componentInstance.hostElement.nativeElement as HTMLElement;
    expect(div).toBeTruthy();
    expect(div.classList.contains('bs2_ds_tooltip_rich')).toBe(true);
  });

  it('deve adicionar o conteúdo do template ao DOM após AfterViewInit', () => {
    const div = fixture.componentInstance.hostElement.nativeElement as HTMLElement;
    const tooltipDiv = div.querySelector('.bs2_ds_tooltip_rich__content');
    expect(tooltipDiv).toBeTruthy();
    expect(tooltipDiv?.querySelector('.tooltip-text')?.textContent).toContain('Tooltip Content');
  });

  it('deve chamar createEmbeddedView, detectChanges e adicionar os nós corretamente', () => {
    // Spy no templateRef
    const directive = new Bs2DSTooltipRichDirective({ nativeElement: document.createElement('div') } as any);

    const mockNode = document.createElement('span');
    const detectChanges = jest.fn();
    const createEmbeddedView = jest.fn().mockReturnValue({
      detectChanges,
      rootNodes: [mockNode],
    });

    directive.bs2DsTooltipRich = { createEmbeddedView } as any;

    directive.ngAfterViewInit();

    const appendedDiv = directive['el'].nativeElement.querySelector('.bs2_ds_tooltip_rich__content');
    expect(createEmbeddedView).toHaveBeenCalledWith(null);
    expect(detectChanges).toHaveBeenCalled();
    expect(appendedDiv).toBeTruthy();
    expect(appendedDiv.contains(mockNode)).toBe(true);
  });
});
