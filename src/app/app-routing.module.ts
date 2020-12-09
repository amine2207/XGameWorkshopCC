import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenreComponent } from './genre/genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { LaisserCommentaireComponent } from './laisser-commentaire/laisser-commentaire.component';
import { ListCommentairesComponent } from './list-commentaires/list-commentaires.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { UpdateJeuComponent } from './update-jeu/update-jeu.component';


const routes: Routes = [
  { path: '', component: ListCommentairesComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'jeux', component: JeuxComponent },
  { path: 'add-genre', component: AddGenreComponent },
  { path: 'updategenre/:id', component: UpdateGenreComponent },
  { path: 'delete_genre/:id', component: GenreComponent },
  { path: 'deletejeu/:id', component: JeuxComponent },
  { path: 'updatejeu/:id', component: UpdateJeuComponent },
  { path: 'laisser-commentaire', component: LaisserCommentaireComponent },
  { path: 'list_comms', component: ListCommentairesComponent },
  { path: 'deletecomm/:id', component: ListCommentairesComponent },
  { path : 'update_comm/:id',component:UpdateCommentaireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
