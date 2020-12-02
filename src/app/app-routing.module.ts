import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'genres', component: GenreComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
