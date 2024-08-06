import { Component } from '@angular/core';
import { PipeExamplesComponent } from '../pipe-examples/pipe-examples.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PipeExamplesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
