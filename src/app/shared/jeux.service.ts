import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jeux } from '../model/jeux';
@Injectable({
  providedIn: 'root'
})
export class JeuxService {

 
  jeuxUrl = "http://localhost:3000/Jeux";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  

  addJeu(j: Jeux): Observable<Jeux>
  {
    return this.http.post<Jeux>(this.jeuxUrl, j, this.httpOptions);
  }
  
  getJeu(): Observable<Jeux[]>
  {
    return this.http.get<Jeux[]>(this.jeuxUrl);
  }

  updateJeu(id: number, j: Jeux): Observable<Jeux>
  {
    return this.http.put<Jeux>(this.jeuxUrl + '/' + id, j, this.httpOptions);
  }

  deleteJeu(j: Jeux |number):  Observable<Jeux>
  {
    const identifiant = typeof j === 'number' ? j : j.id;
    const url = this.jeuxUrl + '/' + identifiant;
    return this.http.delete<Jeux>(url);
  }

}
