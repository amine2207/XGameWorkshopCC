import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commUrl = "http://localhost:3000/commentaires";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http: HttpClient) { }

  laissercommentaires(commentaire: Commentaire): Observable<Commentaire>
  {
    return this.http.post<Commentaire>(this.commUrl, commentaire, this.httpOptions);
  }
  
  getcomm(): Observable<Commentaire[]>
  {
    return this.http.get<Commentaire[]>(this.commUrl);
  }

  updateCOMM(id: number, c: Commentaire): Observable<Commentaire>
  {
    return this.http.put<Commentaire>(this.commUrl + '/' + id, c, this.httpOptions);
  }

  deleteCOMM(c: Commentaire |number):  Observable<Commentaire>
  {
    const identifiant = typeof c === 'number' ? c : c.id;
    const url = this.commUrl + '/' + identifiant;
    return this.http.delete<Commentaire>(url);
  }

}
