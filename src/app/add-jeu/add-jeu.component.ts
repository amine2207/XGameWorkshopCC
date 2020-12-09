import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { Jeux } from '../model/jeux';
import { GenreService } from '../shared/genre.service';
import { JeuxService } from '../shared/jeux.service';
@Component({
  selector: 'app-add-jeu',
  templateUrl: './add-jeu.component.html',
  styleUrls: ['./add-jeu.component.css']
})
export class AddJeuComponent implements OnInit {

  jeux_form: FormBuilder = new FormBuilder();
  jeux_group: FormGroup;
  jeux: Jeux = new Jeux();
  listgenres: Genre[] = [];
  img;

  img_url = "../../assets/images/";

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

    this.js.profileImageUpdate$.subscribe((img) => this.img = img);

  }
  get id() { return this.jeux_group.get('id'); }
  get nom() { return this.jeux_group.get('nom'); }
  get description() { return this.jeux_group.get('description'); }
  get couverture() { return this.jeux_group.get('couverture'); }
  get prix() { return this.jeux_group.get('prix'); }
  get genre_id() { return this.jeux_group.get('genre_id'); }

  add_jeu() {
    this.js.addJeu(this.jeux).subscribe(resultat => {
      alert("Jeu ajouté !!")
      console.log("jeu added");
    },
      (err) => {
        console.log(err);
      });
  }


  onSelectFile(e)
  {
    if (e.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any)=> {
        this.img_url = event.target.result;
      }
    }
  }

  DisplayImgSubject()
  {
    this.js.getJeu()
   .pipe()
  .subscribe(
    userData => {
      this.img = this.jeux.couverture ;
      this.js.profileImageUpdate$.next(this.img);
    });
  }
}
