import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-outlined-button]',
  standalone: true,
})
export class Bs2DSOutlinedButtonDirective implements OnInit {
  @Input('bs2-ds-outlined-button') bs2DSOutlinedButton?: 'small' | 'medium' | 'large' | '';
  @Input() tabindex = 0;

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('bs2_ds_button');
    this.el.nativeElement.classList.add('outlined');
    this.el.nativeElement.classList.add('primary');
  }

  ngOnInit(): void {
    this.bs2DSOutlinedButton && this.el.nativeElement.classList.add(this.bs2DSOutlinedButton);
  }
}
