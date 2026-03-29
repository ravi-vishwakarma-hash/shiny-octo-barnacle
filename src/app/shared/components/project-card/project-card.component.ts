import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../../core/models/portfolio.models';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectItem;
}
