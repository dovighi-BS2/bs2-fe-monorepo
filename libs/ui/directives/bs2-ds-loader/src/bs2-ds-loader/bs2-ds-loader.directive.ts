import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[bs2-ds-loader]',
  standalone: true,
})
export class Bs2DSLoaderDirective {
  public loaderRef: HTMLSpanElement;

  constructor(public el: ElementRef) {
    this.loaderRef = document.createElement('span');
    this.loaderRef.classList.add('bs2_ds_loader');
    this.loaderRef.innerHTML = `<span class='bs2_ds_loader__spinner'></span>`;
  }

  @Input('bs2-ds-loader') set loader(loader: boolean) {
    loader ? this.add() : this.remove();
  }

  @Input() set loaderBG(loaderBG: string) {
    this.loaderRef.style.backgroundColor = loaderBG;
  }

  private add() {
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.appendChild(this.loaderRef);
  }

  private remove() {
    this.loaderRef.remove();
  }
}
