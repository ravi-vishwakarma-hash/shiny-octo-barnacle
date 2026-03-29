import { Component, OnInit, computed, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroSectionComponent } from './features/portfolio/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './features/portfolio/sections/about-section/about-section.component';
import { SkillsSectionComponent } from './features/portfolio/sections/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './features/portfolio/sections/projects-section/projects-section.component';
import { ExperienceSectionComponent } from './features/portfolio/sections/experience-section/experience-section.component';
import { ContactSectionComponent } from './features/portfolio/sections/contact-section/contact-section.component';
import { ScrollSpyService } from './core/services/scroll-spy.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AmbientBackgroundComponent } from './shared/components/ambient-background/ambient-background.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    AmbientBackgroundComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly scrollSpy = inject(ScrollSpyService);

  protected readonly activeSection = computed(() => this.scrollSpy.activeSection());

  ngOnInit(): void {
    this.titleService.setTitle('Ravi Vishwakarma | Backend Software Engineer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Portfolio of Ravi Vishwakarma, Backend Software Engineer specializing in .NET Core, scalable systems, SQL Server, and system design.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Ravi Vishwakarma, Backend Software Engineer, .NET Core, C#, SQL Server, System Design, Angular Portfolio'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Ravi Vishwakarma Portfolio' });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Modern Angular portfolio showcasing backend engineering projects, experience, and scalable system expertise.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
