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
import { MatSelectModule } from '@angular/material/select';


interface Food {
  value: string;
  viewValue: string;
}

interface Category {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    UpperCasePipe,
  ],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.scss',
})
export class EditMovieComponent {
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
  editForm: FormGroup;

  constructor(
    public movieService: MovieService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.movieList = this.movieService.getMovieList();

    // formGroup -> formControlName
    // this.movieForm = this.fb.group({
    //   id: '',
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   poster: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(10),
    //       Validators.pattern(/^https:.*/),
    //     ],
    //   ],
    //   rating: [
    //     '',
    //     [Validators.required, Validators.min(1), Validators.max(10)],
    //   ],
    //   summary: '',
    //   trailer: '',
    // });

    this.editForm = this.fb.group({
      id : '',
      title: ['', [Validators.required, Validators.minLength(2)]],
      book_image: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],
      author:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      category: '',
      publication_date: ['', [Validators.required]],
      status: '',
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.movieService.getMovieByIdP(id).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.editForm.patchValue(data);
    });
  }

  editMovie() {
    // console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.editForm.valid) {
      let updatedMovie: IMovie = this.editForm.value;
      // console.log(this.editForm.value);
      console.log(updatedMovie.id);

      this.movieService.editMovie(updatedMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get title() {
    return this.editForm.get('title');
  }
}
