import { Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { Bs2DSIconComponent } from '@bs2/design-system/components/bs2-ds-icon';

@Directive({
  selector: '[bs2-ds-flat-button]',
  standalone: true,
})
export class Bs2DSFlatButtonDirective implements OnInit {
  @Input('bs2-ds-flat-button') bs2DSFlatButton?: 'small' | 'medium' | 'large' | '';
  @Input() tabindex = 0;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';

  constructor(
    public el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {
    this.el.nativeElement.classList.add('bs2_ds_button');
    this.el.nativeElement.classList.add('flat');
    this.el.nativeElement.classList.add('primary');
  }

  ngOnInit(): void {
    this.bs2DSFlatButton && this.el.nativeElement.classList.add(this.bs2DSFlatButton);
    this.renderIcon();
  }

  private renderIcon(): void {
    if (!this.icon) return;

    const iconRef = this.viewContainerRef.createComponent(Bs2DSIconComponent);
    iconRef.setInput('name', this.icon);
    iconRef.setInput('size', 16);

    const wrapper = this.renderer.createElement('span');
    this.renderer.addClass(wrapper, 'icon');
    this.renderer.addClass(wrapper, this.iconPosition);
    this.renderer.appendChild(wrapper, iconRef.location.nativeElement);

    if (this.iconPosition === 'right') {
      this.renderer.appendChild(this.el.nativeElement, wrapper);
    } else {
      this.renderer.insertBefore(this.el.nativeElement, wrapper, this.el.nativeElement.firstChild);
    }
  }
}
