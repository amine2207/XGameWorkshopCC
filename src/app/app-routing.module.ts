import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenreComponent } from './genre/genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'jeux', component: JeuxComponent },
  { path: 'add-genre', component: AddGenreComponent },
  { path: 'updategenre/:id', component: UpdateGenreComponent },
  { path: 'delete_genre/:id', component: GenreComponent },
  { path: 'deletejeu/:id', component: JeuxComponent },
  { path: 'updatejeu/:id', component: UpdateJeuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
