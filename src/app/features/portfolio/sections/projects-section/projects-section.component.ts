import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, startWith } from 'rxjs';
import { GITHUB_USERNAME, PROJECTS } from '../../../../core/data/portfolio.data';
import { GithubService } from '../../../../core/services/github.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { GithubRepoCardComponent } from '../../../../shared/components/github-repo-card/github-repo-card.component';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [AsyncPipe, SectionHeadingComponent, ProjectCardComponent, GithubRepoCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  private readonly githubService = inject(GithubService);

  readonly staticProjects = PROJECTS;
  readonly githubUsername = GITHUB_USERNAME;
  readonly githubReposState$ = this.githubService.getTopRepos(this.githubUsername).pipe(
    map((repos) => ({
      loading: false,
      repos
    })),
    startWith({
      loading: true,
      repos: []
    })
  );
}
