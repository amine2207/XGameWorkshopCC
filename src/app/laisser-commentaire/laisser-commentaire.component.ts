import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';
import { Commentaire } from '../model/commentaire';
import { Jeux } from '../model/jeux';
import { CommentsService } from '../shared/comments.service';
import { JeuxService } from '../shared/jeux.service';

@Component({
  selector: 'app-laisser-commentaire',
  templateUrl: './laisser-commentaire.component.html',
  styleUrls: ['./laisser-commentaire.component.css']
})
export class LaisserCommentaireComponent implements OnInit {
  listJeux: Jeux[] = [];
  value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 10
  };
  commentaire: Commentaire = new Commentaire();
  constructor(private router : Router, private cs: CommentsService, private js:JeuxService) { }

  ngOnInit(): void {
    this.js.getJeu().subscribe(
      (data:Jeux[])=>{this.listJeux= data
      }, (err) => {
        console.log(err);
    }
    );
  }
  save() {
    this.cs.laissercommentaires(this.commentaire).subscribe(
      resultat => {
        alert("une opération à été effectué")
        console.log("Commentaire ajouté");
        this.router.navigateByUrl('/list_comms');
      }, (err) => {
        console.log(err);
      }
    )
  }
}
