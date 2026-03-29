import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private timeoutId?: ReturnType<typeof setTimeout>;
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  @Input({ required: true }) words: string[] = [];

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private tick(): void {
    if (!this.words.length) {
      return;
    }

    const currentWord = this.words[this.wordIndex];
    this.charIndex += this.isDeleting ? -1 : 1;

    this.elementRef.nativeElement.textContent = currentWord.slice(0, this.charIndex);

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      this.isDeleting = true;
      this.timeoutId = setTimeout(() => this.tick(), 1400);
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }

    const delay = this.isDeleting ? 42 : 78;
    this.timeoutId = setTimeout(() => this.tick(), delay);
  }
}
