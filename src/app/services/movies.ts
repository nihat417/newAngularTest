import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movies {
  private moviesUrl ="http://www.omdbapi.com/";
  private apiKey = "5094dfd3";

  constructor(private http: HttpClient) {}

  serachMovies(title:string):Observable<any> {
    return this.http.get(`${this.moviesUrl}?s=${title}&apikey=${this.apiKey}`);
  }
}
