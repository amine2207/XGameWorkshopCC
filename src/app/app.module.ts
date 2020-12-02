import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GenreComponent } from './genre/genre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GenreComponent,
    AddGenreComponent,
    UpdateGenreComponent,
    JeuxComponent,
    UpdateJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
