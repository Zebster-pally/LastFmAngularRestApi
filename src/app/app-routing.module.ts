import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { GenresComponent } from './components/genres/genres.component';

const routes: Routes = [
  { path: '', component: GenresComponent },
  { path: 'albums/:genre', component: AlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
