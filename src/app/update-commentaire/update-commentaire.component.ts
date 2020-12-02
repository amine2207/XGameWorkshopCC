import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';
import { Commentaire } from '../model/commentaire';
import { Jeux } from '../model/jeux';
import { CommentsService } from '../shared/comments.service';
import { JeuxService } from '../shared/jeux.service';

@Component({
  selector: 'app-update-commentaire',
  templateUrl: './update-commentaire.component.html',
  styleUrls: ['./update-commentaire.component.css']
})
export class UpdateCommentaireComponent implements OnInit {

  listJeux: Jeux[] = [];
  commentaire: Commentaire = new Commentaire();
  value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 10
  };
  constructor(private router :Router,private cs :CommentsService,private js:JeuxService) { }

  ngOnInit(): void {
    this.js.getJeu().subscribe(
      (data:Jeux[])=>{this.listJeux= data
      }, (err) => {
        console.log(err);
    }
    );
  }
  update() {
    this.cs.updateCOMM(this.commentaire.id,this.commentaire).subscribe(
      resultat => {
        alert("Commentaire à été modifié")
        console.log("Commentaire modifié");
        this.router.navigateByUrl('/list_comms');
      }, (err) => {
        console.log(err);
      }
    )
  }
}