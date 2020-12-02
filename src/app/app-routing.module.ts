import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenreComponent } from './genre/genre.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'add-genre', component: AddGenreComponent },
  { path: 'updategenre/:id', component: UpdateGenreComponent },
  { path: 'delete_genre/:id', component: GenreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
