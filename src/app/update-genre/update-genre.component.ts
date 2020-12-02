import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { GenreService } from '../shared/genre.service';
@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit {
  img_url = "../assets/images/";


  g: Genre = new Genre();
  
  constructor(private gs: GenreService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  update() {
    this.gs.updateGenre(this.g.id, this.g).subscribe(resultat => {
      alert("Genre Modifié");
      console.log(this.g.id);
      this.router.navigateByUrl('/genres');
    }, (err) => {
      console.log(err);
      console.log(this.g);

    }
    );

  }
  
  onSelectFile(e) {
    if (e.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.img_url = event.target.result;
      }
    }
  }

 
}
