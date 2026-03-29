import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../../core/data/portfolio.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { SkillCardComponent } from '../../../../shared/components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SectionHeadingComponent, SkillCardComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  readonly categories = SKILL_CATEGORIES;
}
