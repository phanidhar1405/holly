import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewMovie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../app.component';
import { MovieService } from '../movie.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    UpperCasePipe,
  ],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss',
})
export class EditMovieComponent {
  // @Input() movieList: Array<IMovie> = [];

  movieList: Array<IMovie> = [];
  movieForm: FormGroup;

  constructor(
    public movieService: MovieService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.movieList = this.movieService.getMovieList();

    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: '',
      trailer: '',
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.movieService.getMovieByIdP(id).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.movieForm.patchValue(data);
    });
  }

  editMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.movieForm.valid) {
      let updatedMovie: IMovie = this.movieForm.value;
      console.log(this.movieForm.value);

      this.movieService.editMovie(updatedMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get name() {
    return this.movieForm.get('name');
  }

  get poster() {
    return this.movieForm.get('poster');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
