import { IMovie } from './app.component';

export type NewMovie = Omit<IMovie, 'id'>;
