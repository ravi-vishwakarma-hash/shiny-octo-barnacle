import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeSection = signal('home');

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }
}
