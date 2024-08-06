import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuard } from './auth.guard';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'color-game',
    component: ColorGameComponent,
    canActivate: [authGuard],
  },
  {
    path: 'films', // url
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'movies', // url
    children: [
      { path: '', component: MovieListComponent },
      { path: 'add', component: AddMovieComponent},
      { path: 'edit/:id', component: EditMovieComponent },
      { path: ':id', component: MovieDetailsComponent },
    ],
  },
  {
    path: '**', // url
    component: PageNotFoundComponent,
  },
];
