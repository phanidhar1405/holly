import { Component, Input } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieComponent, AddMovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movieList: Array<IMovie> = []; // Model -> View
  isLoading: boolean = true;
  msg = '';

  constructor(public movieService: MovieService, private router: Router) {}

  // After Initialization of the component
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService
      .getAllMoviesP()
      .then((data) => {
        this.movieList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }

  // Delete -> Refresh
  deleteMovieP(movie: IMovie) {
    this.movieService.deleteMovie(movie).then(() => this.loadMovies());
  }

  editMovieP(movie: IMovie) {
    // /movies/edit/99
    this.router.navigate(['movies', 'edit', movie.id]);
    // this.movieService.editMovie(movie).then(() => this.loadMovies());
  }
}
