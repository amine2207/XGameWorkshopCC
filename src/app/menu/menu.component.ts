import { Component, OnInit } from '@angular/core';
import { Jeux } from '../model/jeux';
import { JeuxService } from '../shared/jeux.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listJeux: Jeux[] = [];

  term: string;
  constructor(private js:JeuxService) { }

  ngOnInit(): void {
    this.js.getJeu().subscribe(
      (data:Jeux[])=>{this.listJeux= data
      }, (err) => {
        console.log(err);
    }
    );
  }

}
