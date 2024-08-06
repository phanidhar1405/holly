import { Component, ChangeDetectionStrategy ,Input } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

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
import { Title } from '@angular/platform-browser';

interface Food {
  value: string;
  viewValue: string;
}

interface Category {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})



export class AddMovieComponent {
  // @Input() movieList: Array<IMovie> = [];

    foods: Food[] = [
    {value: 'Plan to Read', viewValue: 'Plan to Read'},
    {value: 'Have Read', viewValue: 'Have Read'},
    {value: 'Currently Reading', viewValue: 'Currently Reading'},
  ];

    Cat: Category[] = [
    {value: 'Action', viewValue: 'Action'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Fantasy', viewValue: 'Fantasy'},
    {value: 'Thriller', viewValue: 'Thriller'},
    
  ];

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
      title: ['', [Validators.required, Validators.minLength(2)]],
      book_image: '',
      // // Author: [
      //   '',
      //   [Validators.required, Validators.min(1), Validators.max(10)],
      // ],
      author:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      category: '',
      publication_date: ['', [Validators.required]],
      status: '',
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
  get title() {
    return this.movieForm.get('title');
  }

  // get book_image() {
  //   return this.movieForm.get('book_image');
  // }

  // get author() {
  //   return this.movieForm.get('author');
  // }

  // get category() {
  //   return this.movieForm.get('category');
  // }

  // get publication_date() {
  //   return this.movieForm.get('publication_date');
  // }

  // get status() {
  //   return this.movieForm.get('status');
  // }
}



// export class AddMovieComponent {
//   // @Input() movieList: Array<IMovie> = [];

//   foods: Food[] = [
//     { value: 'Plan to Read', viewValue: 'Plan to Read' },
//     { value: 'Have Read', viewValue: 'Have Read' },
//     { value: 'Currently Reading', viewValue: 'Currently Reading' },
//   ];

//   Cat: Category[] = [
//     { value: 'Action', viewValue: 'Action' },
//     { value: 'Horror', viewValue: 'Horror' },
//     { value: 'Fantasy', viewValue: 'Fantasy' },
//     { value: 'Thriller', viewValue: 'Thriller' },
//   ];

//   movieList: Array<IMovie> = [];
//   movieForm: FormGroup;

//   constructor(
//     public movieService: MovieService,
//     private router: Router,
//     private fb: FormBuilder
//   ) {
//     this.movieList = this.movieService.getMovieList();

//     // formGroup -> formControlName
//     this.movieForm = this.fb.group({
//       title: ['', [Validators.required, Validators.minLength(2)]],
//       book_image: ['', Validators.required],
//       author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
//       category: '',
//       publication_date: ['', [Validators.required]],
//       status: '',
//     });
//   }

//   addMovie() {
//     console.log(this.movieForm.value);
//     // Todo: Fix Add - Technical Debt

//     if (this.movieForm.valid) {
//       let newMovie: NewMovie = this.movieForm.value;

//       this.movieService.addMovie(newMovie).then(() => {
//         // Move to movies page
//         this.router.navigate(['movies']);
//       });
//     }
//   }

//   // getter
//   get title() {
//     return this.movieForm.get('title');
//   }

//   get book_image() {
//     return this.movieForm.get('book_image');
//   }

//   get author() {
//     return this.movieForm.get('author');
//   }

//   get category() {
//     return this.movieForm.get('category');
//   }

//   get publication_date() {
//     return this.movieForm.get('publication_date');
//   }

//   get status() {
//     return this.movieForm.get('status');
//   }
// }

