import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-filled-button]',
  standalone: true,
})
export class Bs2DSFilledButtonDirective implements OnInit {
  @Input('bs2-ds-filled-button') bs2DSFilledButton?: 'small' | 'medium' | 'large' | '';
  @Input() tabindex = 0;

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('bs2_ds_button');
    this.el.nativeElement.classList.add('filled');
    this.el.nativeElement.classList.add('primary');
  }

  ngOnInit(): void {
    this.bs2DSFilledButton && this.el.nativeElement.classList.add(this.bs2DSFilledButton);
  }
}
