import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class GsapService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);
  readonly prefersReducedMotion =
    this.isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private loader?: Promise<typeof import('gsap')['gsap']>;
  private registered = false;

  async load() {
    if (!this.isBrowser) {
      return null;
    }

    this.loader ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapModule, scrollTriggerModule]) => {
        const gsap = gsapModule.gsap;

        if (!this.registered) {
          gsap.registerPlugin(scrollTriggerModule.ScrollTrigger);
          this.registered = true;
        }

        return gsap;
      }
    );

    return this.loader;
  }
}
