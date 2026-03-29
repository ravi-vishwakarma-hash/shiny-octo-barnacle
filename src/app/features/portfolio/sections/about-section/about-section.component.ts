import { Component } from '@angular/core';
import { ABOUT_POINTS } from '../../../../core/data/portfolio.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { InViewDirective } from '../../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeadingComponent, InViewDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  readonly aboutPoints = ABOUT_POINTS;
}
