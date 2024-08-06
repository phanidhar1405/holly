import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IMovie } from '../app.component';
import { MovieService } from '../movie.service';
import { NewMovie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  // @Input() movieList: Array<IMovie> = [];

  movieList: Array<IMovie> = [];

  constructor(public movieService: MovieService, private router: Router) {
    this.movieList = this.movieService.getMovieList();
  }

  name = '';
  poster = '';
  rating = '';
  summary = '';
  trailer = '';

  addMovie() {
    // Todo: Fix Add - Technical Debt
    let newMovie: NewMovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
      trailer: this.trailer,
    };

    // nithin.deposit(500)
    this.movieService.addMovie(newMovie).then(() => {
      // Move to movies page
      this.router.navigate(['movies']);
    });
  }
}
