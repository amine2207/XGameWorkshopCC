import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../model/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genreUrl = "http://localhost:3000/Genre";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http: HttpClient) { }

  addGenre(genre: Genre): Observable<Genre>
  {
    return this.http.post<Genre>(this.genreUrl, genre, this.httpOptions);
  }
  
  getGenres(): Observable<Genre[]>
  {
    return this.http.get<Genre[]>(this.genreUrl);
  }

  updateGenre(id: number, u: Genre): Observable<Genre>
  {
    return this.http.put<Genre>(this.genreUrl + '/' + id, u, this.httpOptions);
  }

  deleteGenre(g: Genre |number):  Observable<Genre>
  {
    const identifiant = typeof g === 'number' ? g : g.id;
    const url = this.genreUrl + '/' + identifiant;
    return this.http.delete<Genre>(url);
  }
}
