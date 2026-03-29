import { Component } from '@angular/core';
import { EXPERIENCE_TIMELINE } from '../../../../core/data/portfolio.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { InViewDirective } from '../../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [SectionHeadingComponent, InViewDirective],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  readonly timeline = EXPERIENCE_TIMELINE;
}
