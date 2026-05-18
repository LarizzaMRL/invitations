import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') delay: number | string = 0;
  @Input() revealVariant: 'up' | 'left' | 'right' | 'zoom' = 'up';

  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal', `reveal-${this.revealVariant}`);
    const delayMs = Number(this.delay) || 0;
    if (delayMs > 0) {
      node.style.setProperty('--reveal-delay', `${delayMs}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
