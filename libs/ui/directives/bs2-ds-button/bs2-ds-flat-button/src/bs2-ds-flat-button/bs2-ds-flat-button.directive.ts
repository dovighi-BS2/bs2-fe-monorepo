import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-flat-button]',
  standalone: true,
})
export class Bs2DSFlatButtonDirective implements OnInit {
  @Input('bs2-ds-flat-button') bs2DSFlatButton?: 'small' | 'medium' | 'large' | '';
  @Input() tabindex = 0;

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('bs2_ds_button');
    this.el.nativeElement.classList.add('flat');
    this.el.nativeElement.classList.add('primary');
  }

  ngOnInit(): void {
    this.bs2DSFlatButton && this.el.nativeElement.classList.add(this.bs2DSFlatButton);
  }
}
