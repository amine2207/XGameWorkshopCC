
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../model/genre';
import { Jeux } from '../model/jeux';
import { GenreService } from '../shared/genre.service';
import { JeuxService } from '../shared/jeux.service';
@Component({
  selector: 'app-update-jeu',
  templateUrl: './update-jeu.component.html',
  styleUrls: ['./update-jeu.component.css']
})
export class UpdateJeuComponent implements OnInit {

  listgenres: Genre[] = [];
  g: Genre = new Genre();
  jeux_form: FormBuilder = new FormBuilder();
  jeux_group: FormGroup;
  jeux: Jeux = new Jeux();
  constructor(private js: JeuxService, private router: Router , private gs : GenreService) {
    this.jeux_group = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    description: new FormControl('', Validators.minLength(5)),
    couverture: new FormControl('', Validators.required),
    prix: new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]*")]),
    genre_id: new FormControl('', Validators.required),
    
  }); }

  ngOnInit(): void {
    this.gs.getGenres().subscribe(
      (data:Genre[])=>{this.listgenres= data
      }, (err) => {
        console.log(err);
    }
    );
  }

  get id() { return this.jeux_group.get('id'); }
  get nom() { return this.jeux_group.get('nom'); }
  get description() { return this.jeux_group.get('description'); }
  get couverture() { return this.jeux_group.get('couverture'); }
  get prix() { return this.jeux_group.get('prix'); }
  get genre_id() { return this.jeux_group.get('genre_id'); }

  update_jeu()
  {
    this.js.updateJeu(this.jeux.id, this.jeux).subscribe(resultat => {
      alert("Jeu Modifié");
      console.log(this.g.id);
      this.router.navigateByUrl('/jeux');
    }, (err) => {
        console.log(err);
        console.log(this.g);

    }
    );
  }

}
