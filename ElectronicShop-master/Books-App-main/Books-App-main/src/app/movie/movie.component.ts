import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { IMovie } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    CounterComponent,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input() movie =  {
    id : "123",
    title: "The Way of Kings",
    book_image: "https://example.com/images/the_way_of_kings.jpg",
    author: "Brandon Sanderson",
    category: "Fantasy",
    publication_date: "2010-08-31",
    status: "Currently Reading"
  };

  @Input() id!: string;
  @Output() deleteMovieEvent = new EventEmitter<IMovie>();
  @Output() editMovieEvent = new EventEmitter<IMovie>();

  // show = true;

  // toggleSummary() {
  //   this.show = !this.show;
  // }

  deleteMovie() {
    console.log('Child ❌', this.movie);
    this.deleteMovieEvent.emit(this.movie);
  }

  editMovie() {
    console.log('Child ❌', this.movie);
    this.editMovieEvent.emit(this.movie);
  }
}
