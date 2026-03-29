import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { GsapService } from '../../../core/services/gsap.service';

@Component({
  selector: 'app-ambient-background',
  standalone: true,
  templateUrl: './ambient-background.component.html',
  styleUrl: './ambient-background.component.scss'
})
export class AmbientBackgroundComponent implements AfterViewInit, OnDestroy {
  private readonly gsapService = inject(GsapService);
  private animations: Array<{ kill: () => void; scrollTrigger?: { kill: () => void } }> = [];

  @ViewChild('orbOne', { static: true }) private readonly orbOne?: ElementRef<HTMLElement>;
  @ViewChild('orbTwo', { static: true }) private readonly orbTwo?: ElementRef<HTMLElement>;
  @ViewChild('grid', { static: true }) private readonly grid?: ElementRef<HTMLElement>;

  async ngAfterViewInit(): Promise<void> {
    if (
      !this.gsapService.isBrowser ||
      this.gsapService.prefersReducedMotion ||
      !this.orbOne ||
      !this.orbTwo ||
      !this.grid
    ) {
      return;
    }

    const gsap = await this.gsapService.load();
    if (!gsap) {
      return;
    }

    this.animations = [
      gsap.to(this.orbOne.nativeElement, {
        yPercent: 14,
        xPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1
        }
      }),
      gsap.to(this.orbTwo.nativeElement, {
        yPercent: -12,
        xPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4
        }
      }),
      gsap.to(this.grid.nativeElement, {
        yPercent: 8,
        opacity: 0.78,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.6
        }
      })
    ];
  }

  ngOnDestroy(): void {
    this.animations.forEach((animation) => {
      animation.scrollTrigger?.kill();
      animation.kill();
    });
  }
}
