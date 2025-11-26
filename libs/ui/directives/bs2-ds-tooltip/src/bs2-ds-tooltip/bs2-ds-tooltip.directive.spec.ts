import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSTooltipDirective } from './bs2-ds-tooltip.directive';

@Component({
  template: `<div bs2-ds-tooltip #tooltipEl>Tooltip test</div>`,
  standalone: true,
  imports: [Bs2DSTooltipDirective],
})
class TestHostComponent {
  @ViewChild('tooltipEl', { read: ElementRef }) tooltipEl!: ElementRef;
}

describe('Bs2DSTooltipDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('deve criar a diretiva com sucesso e adicionar a classe CSS', () => {
    const element: HTMLElement = fixture.componentInstance.tooltipEl.nativeElement;
    expect(element).toBeTruthy();
    expect(element.classList.contains('bs2_ds_tooltip')).toBe(true);
  });
});
