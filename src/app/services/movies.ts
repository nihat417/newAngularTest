import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesUrl = 'https://www.omdbapi.com/';
  private apiKey = '5094dfd3';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get(`${this.moviesUrl}?s=${title}&apikey=${this.apiKey}`);
  }
}
