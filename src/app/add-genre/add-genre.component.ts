import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';

import { GenreService } from '../shared/genre.service';
@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  listGenre: Genre[] = [];
  
  g: Genre = new Genre();

  url = "C:/workspace/AngularProjectCC/src/assets/images/";
  img_url = "../../assets/images/";
  img: any =  "../../assets/images/";
  listgenres: Genre[] = [];
  constructor(private genre_service: GenreService, private router: Router, private gs: GenreService) {
  
  }

  ngOnInit(): void {
    this.gs.getGenres().subscribe(
      (data:Genre[])=>{this.listgenres= data
      }, (err) => {
        console.log(err);
    }
    );
   
  }

  save() {
    this.genre_service.addGenre(this.g).subscribe(
    
    resultat => {
        console.log("genre added");
        //this.router.serializeUrl(this.img);
        //this.g.image = this.img;
      this.router.navigateByUrl('/genres');
    }, (err) => {
      console.log(err);
    }
  )
    
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
}
