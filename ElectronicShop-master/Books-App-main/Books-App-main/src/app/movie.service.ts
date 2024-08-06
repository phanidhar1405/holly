import { Injectable } from '@angular/core';
import { IMovie } from './app.component';
import { NewMovie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieList: Array<IMovie> = [
  {
    id: "302",
    title: "Gone Girl",
    book_image: "https://example.com/images/gone_girl.jpg",
    author: "Gillian Flynn",
    category: "Thriller",
    publication_date: "2012-06-05",
    status: "Plan to Read"
  },
  {
    id: "303",
    title: "The Silence of the Lambs",
    book_image: "https://example.com/images/the_silence_of_the_lambs.jpg",
    author: "Thomas Harris",
    category: "Thriller",
    publication_date: "1988-05-19",
    status: "Have Read"
  },
  {
    id: "304",
    title: "It",
    book_image: "https://example.com/images/it.jpg",
    author: "Stephen King",
    category: "Horror",
    publication_date: "1986-09-15",
    status: "Currently Reading"
  }
]

  constructor() {}

  addMovie(newMovie: NewMovie) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`https://669a428b9ba098ed61fef744.mockapi.io/Books-API`, {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  editMovie(updatedMovie: any) {
    // this.movieList.push(newMovie);

    // Put
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON
    console.log(updatedMovie.category)
    return fetch(
      `https://669a428b9ba098ed61fef744.mockapi.io/Books-API/${updatedMovie.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(updatedMovie),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then((res) => res.json());
  }

  deleteMovie(movie: IMovie) {
    return fetch(
      `https://669a428b9ba098ed61fef744.mockapi.io/Books-API/${movie.id}`,
      { method: 'Delete' }
    ).then((res) => res.json());
  }

  getMovieList() {
    return this.movieList;
  }

  getMovieByIdex(idx: number) {
    return this.movieList[idx];
  }

  getMovieByIdP(id: string): Promise<IMovie> {
    return fetch(
      `https://669a428b9ba098ed61fef744.mockapi.io/Books-API/${id}`
    ).then((res) => res.json());
  }

  getAllMoviesP(): Promise<IMovie[]> {
    return fetch(`https://669a428b9ba098ed61fef744.mockapi.io/Books-API`).then(
      (res) => res.json()
    );
  }
}

// let x = new MovieService();
// let x1 = new MovieService(); // ❌ // Singleton
