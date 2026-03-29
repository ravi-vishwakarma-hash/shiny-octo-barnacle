import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GitHubRepo } from '../../../core/models/portfolio.models';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-github-repo-card',
  standalone: true,
  imports: [DatePipe, InViewDirective],
  templateUrl: './github-repo-card.component.html',
  styleUrl: './github-repo-card.component.scss'
})
export class GithubRepoCardComponent {
  @Input({ required: true }) repo!: GitHubRepo;
}
