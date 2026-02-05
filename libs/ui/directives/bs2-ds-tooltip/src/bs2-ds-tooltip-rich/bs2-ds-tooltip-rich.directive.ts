import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  input,
  InputSignal,
  inject,
} from '@angular/core';
import { Bs2DSTooltipAction } from './bs2-ds-tooltip-action.interface';

@Directive({
  selector: '[bs2-ds-tooltip-rich]',
  standalone: true,
  host: {
    '[class.bs2_ds_tooltip_rich]': 'true',
  },
})
export class Bs2DSTooltipRichDirective implements AfterViewInit {
  public bs2DsTooltipTitle = input('');
  public bs2DsTooltipDescription = input('');
  public bs2DsTooltipActions: InputSignal<Bs2DSTooltipAction[]> = input([]);

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  public ngAfterViewInit(): void {
    const tooltip = this.renderer.createElement('div');
    this.renderer.addClass(tooltip, 'bs2_ds_tooltip_rich__content');

    /* Title */
    if (this.bs2DsTooltipTitle()) {
      const titleEl = this.renderer.createElement('div');
      this.renderer.addClass(titleEl, 'bs2_ds_tooltip_rich__title');
      titleEl.textContent = this.bs2DsTooltipTitle();
      this.renderer.appendChild(tooltip, titleEl);
    }

    /* Description */
    if (this.bs2DsTooltipDescription()) {
      const descEl = this.renderer.createElement('div');
      this.renderer.addClass(descEl, 'bs2_ds_tooltip_rich__description');
      descEl.textContent = this.bs2DsTooltipDescription();
      this.renderer.appendChild(tooltip, descEl);
    }

    /* Actions */
    const actions = this.bs2DsTooltipActions() ?? [];
    if (actions.length) {
      const actionsContainer = this.renderer.createElement('div');
      this.renderer.addClass(actionsContainer, 'bs2_ds_tooltip_rich__actions');

      actions.forEach(action => {
        const button = this.renderer.createElement('button');
        this.renderer.addClass(button, 'bs2_ds_tooltip_rich__action');
        this.renderer.addClass(
          button,
          action.variant === 'secondary'
            ? 'bs2_ds_tooltip_rich__action--secondary'
            : 'bs2_ds_tooltip_rich__action--primary'
        );

        button.textContent = action.label;

        if (action.onClick) {
          this.renderer.listen(button, 'click', (event) => {
            event.stopPropagation();
            action.onClick?.();
          });
        }

        this.renderer.appendChild(actionsContainer, button);
      });

      this.renderer.appendChild(tooltip, actionsContainer);
    }

    this.renderer.appendChild(this.el.nativeElement, tooltip);
  }
}


