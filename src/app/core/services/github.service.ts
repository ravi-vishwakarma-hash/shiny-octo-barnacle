import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';
import { GitHubRepo } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);
  private readonly apiBase = 'https://api.github.com/users';

  getTopRepos(username: string, limit = 4) {
    return this.http
      .get<GitHubRepo[]>(`${this.apiBase}/${username}/repos?sort=updated&per_page=100`)
      .pipe(
        map((repos) =>
          repos
            .filter((repo) => !repo.name.toLowerCase().includes(username.toLowerCase()))
            .sort(
              (a, b) =>
                b.stargazers_count + b.forks_count - (a.stargazers_count + a.forks_count)
            )
            .slice(0, limit)
        ),
        catchError(() => of<GitHubRepo[]>([]))
      );
  }
}
