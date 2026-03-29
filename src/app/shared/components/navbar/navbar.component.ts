import { NgClass } from '@angular/common';
import { AfterViewInit, Component, HostListener, Input, OnDestroy, inject, signal } from '@angular/core';
import { NAV_ITEMS } from '../../../core/data/portfolio.data';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly themeService = inject(ThemeService);
  private readonly scrollSpy = inject(ScrollSpyService);
  private observer?: IntersectionObserver;

  readonly navItems = NAV_ITEMS;
  readonly currentTheme = this.themeService.theme;
  readonly mobileOpen = signal(false);

  @Input() activeSection = 'home';

  ngAfterViewInit(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          this.scrollSpy.setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.75],
        rootMargin: '-30% 0px -45% 0px'
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileOpen.update((isOpen) => !isOpen);
  }

  closeMobileMenu(): void {
    this.mobileOpen.set(false);
  }

  @HostListener('window:resize')
  handleResize(): void {
    if (window.innerWidth >= 960) {
      this.closeMobileMenu();
    }
  }
}
