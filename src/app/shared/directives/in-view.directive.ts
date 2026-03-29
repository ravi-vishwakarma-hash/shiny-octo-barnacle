import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';
import { GsapService } from '../../core/services/gsap.service';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly gsapService = inject(GsapService);
  private animation?: { kill: () => void; scrollTrigger?: { kill: () => void } };

  @Input() inViewThreshold = 0.2;

  async ngAfterViewInit(): Promise<void> {
    this.renderer.addClass(this.elementRef.nativeElement, 'reveal');

    if (!this.gsapService.isBrowser || this.gsapService.prefersReducedMotion) {
      this.renderer.addClass(this.elementRef.nativeElement, 'in-view');
      return;
    }

    const gsap = await this.gsapService.load();
    if (!gsap) {
      this.renderer.addClass(this.elementRef.nativeElement, 'in-view');
      return;
    }

    this.animation = gsap.fromTo(
      this.elementRef.nativeElement,
      { autoAlpha: 0, y: 28, filter: 'blur(8px)' },
      {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        onStart: () => this.renderer.addClass(this.elementRef.nativeElement, 'in-view'),
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: `top ${Math.round(90 - this.inViewThreshold * 20)}%`,
          once: true
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.animation?.scrollTrigger?.kill();
    this.animation?.kill();
  }
}
