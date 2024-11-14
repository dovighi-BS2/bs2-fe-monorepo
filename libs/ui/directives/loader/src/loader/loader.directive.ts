import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[loader]',
  standalone: true,
})
export class LoaderDirective {
  public loaderRef: HTMLSpanElement;

  constructor(public el: ElementRef) {
    this.loaderRef = document.createElement('span');
    this.loaderRef.classList.add('loader');
    this.loaderRef.innerHTML = `<span class='loader__spinner'></span>`;
  }

  @Input() set loader(loader: boolean) {
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
