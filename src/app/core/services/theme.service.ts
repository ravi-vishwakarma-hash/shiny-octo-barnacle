import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'ravi-portfolio-theme';
  readonly theme = signal<ThemeMode>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const selectedTheme = this.theme();
      this.document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem(this.storageKey, selectedTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): ThemeMode {
    const storedTheme = localStorage.getItem(this.storageKey) as ThemeMode | null;
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
