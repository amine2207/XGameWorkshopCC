import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from '../model/commentaire';
import { CommentsService } from '../shared/comments.service';
@Component({
  selector: 'app-list-commentaires',
  templateUrl: './list-commentaires.component.html',
  styleUrls: ['./list-commentaires.component.css']
})
export class ListCommentairesComponent implements OnInit {

  term: string;
  listcomms: Commentaire[] = [];
  commentaire: Commentaire = new Commentaire();
  constructor(private cs: CommentsService, private router: Router) { }

  ngOnInit(): void {
    this.cs.getcomm().subscribe(
      (data : Commentaire[])=>{this.listcomms= data
      }, (err) => {
        console.log(err);
    }
    );
  }
  delete(id: number)
  {
    this.cs.deleteCOMM(id).subscribe(resultat => {
      alert("Votre Commentaire a été supprimé");
      this.router.navigateByUrl('/list_comms');
    }, (err) => {
      console.log(err);
  });
  }



}
