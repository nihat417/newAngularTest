import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies';

@Component({
  selector: 'app-movies',
  imports: [CommonModule,FormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  constructor(private moviesService: MoviesService) {}

  searchTitle = '';
  movies: any[] = [];
  errorMessage = '';

  searchMovies() {
    const query = this.searchTitle.trim();

    if (!query) {
      this.errorMessage = 'Введите название фильма.';
      this.movies = [];
      return;
    }

    if (query.length < 3) {
      this.errorMessage = 'Введите минимум 3 символа — короткий запрос даёт слишком много результатов.';
      this.movies = [];
      return;
    }

    this.moviesService.searchMovies(query).subscribe({
      next: (data) => {
        if (data.Response === 'False' || !data.Search) {
          this.movies = [];
          this.errorMessage = data.Error || 'Фильмы не найдены.';
        } else {
          this.movies = data.Search;
          this.errorMessage = '';
        }
      },
      error: () => {
        this.errorMessage = 'Не удалось загрузить фильмы. Попробуйте ещё раз.';
        this.movies = [];
      }
    });
  }
}
