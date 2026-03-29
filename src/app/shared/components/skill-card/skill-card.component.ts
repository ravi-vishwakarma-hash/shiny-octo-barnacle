import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../../core/models/portfolio.models';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input({ required: true }) category!: SkillCategory;
}
