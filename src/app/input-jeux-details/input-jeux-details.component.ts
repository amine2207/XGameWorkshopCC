import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jeux } from '../model/jeux';

@Component({
  selector: 'app-input-jeux-details',
  templateUrl: './input-jeux-details.component.html',
  styleUrls: ['./input-jeux-details.component.css']
})
export class InputJeuxDetailsComponent implements OnInit {

  @Input() item: Jeux;
  msg;
  m;
  constructor() { }

  ngOnInit(): void {
  }

  like(): void
  {
    this.msg = "#1D6421";
    this.m = "vous avez aimé ce jeu "
  }

  dislike(): void
  {
    this.msg = "#A93417";
    this.m = "il semble que vous n'avez pas aimé ce jeu "

  }

}
