import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';
import { HERO_STATS, HERO_TYPING_WORDS } from '../../../../core/data/portfolio.data';
import { GsapService } from '../../../../core/services/gsap.service';
import { TypewriterDirective } from '../../../../shared/directives/typewriter.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TypewriterDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  private readonly gsapService = inject(GsapService);
  private heroTimeline?: any;

  @ViewChild('heroContent', { static: true }) private readonly heroContent?: ElementRef<HTMLElement>;
  @ViewChild('heroPanel', { static: true }) private readonly heroPanel?: ElementRef<HTMLElement>;

  readonly words = HERO_TYPING_WORDS;
  readonly stats = HERO_STATS;

  async ngAfterViewInit(): Promise<void> {
    if (
      !this.gsapService.isBrowser ||
      this.gsapService.prefersReducedMotion ||
      !this.heroContent ||
      !this.heroPanel
    ) {
      return;
    }

    const gsap = await this.gsapService.load();
    if (!gsap) {
      return;
    }

    this.heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    this.heroTimeline
      .from(this.heroContent.nativeElement.children, {
        y: 28,
        autoAlpha: 0,
        duration: 0.82,
        stagger: 0.08
      })
      .from(
        this.heroPanel.nativeElement,
        {
          y: 36,
          autoAlpha: 0,
          scale: 0.98,
          duration: 0.9
        },
        '-=0.45'
      )
      .from(
        this.heroPanel.nativeElement.querySelectorAll('.hero__metric > div, .hero__stack span'),
        {
          y: 18,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.06
        },
        '-=0.42'
      );
  }

  ngOnDestroy(): void {
    this.heroTimeline?.kill();
  }
}
