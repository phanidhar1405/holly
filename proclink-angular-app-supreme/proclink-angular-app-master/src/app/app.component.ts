import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MovieService } from './movie.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export interface IMovie {
  id: string;
  name: string;
  poster: string;
  rating: number;
  summary: string;
  trailer: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    UserComponent,
    MovieListComponent,
    CounterComponent,
    ColorGameComponent,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = [
    {
      id: 0,
      name: 'Bhanu',
      profilePic:
        'https://wallpapers.com/images/hd/profile-picture-f67r1m9y562wdtin.jpg',
    },

    {
      id: 1,
      name: 'Summi',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS-mMYJg4XdOjeEHUJLmvUk-xIpq9UUpEow&s',
    },
    {
      id: 2,
      name: 'Nithin',
      profilePic:
        'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg',
    },
  ];
}
