import { Directive, ElementRef, Input, TemplateRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-tooltip-rich]',
  standalone: true,
  host: {
    '[class.bs2_ds_tooltip_rich]': 'true',
  },
})
export class Bs2DSTooltipRichDirective implements AfterViewInit {
  @Input('bs2-ds-tooltip-rich') bs2DsTooltipRich!: TemplateRef<any>;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const div = document.createElement('div');
    div.classList.add('bs2_ds_tooltip_rich__content');

    this.el.nativeElement.appendChild(div);

    const view = this.bs2DsTooltipRich.createEmbeddedView(null);

    view.detectChanges();
    view.rootNodes.forEach((node) => div.appendChild(node));
  }
}
