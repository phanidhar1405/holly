import { Component, Input } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  // @Input() movieList: Array<IMovie> = [];

  movieList: Array<IMovie> = [];
  movieForm: FormGroup;

  constructor(
    public movieService: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieList = this.movieService.getMovieList();

    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: '',
      trailer: '',
    });
  }

  addMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.movieForm.valid) {
      let newMovie: NewMovie = this.movieForm.value;

      this.movieService.addMovie(newMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get name() {
    return this.movieForm.get('name');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
