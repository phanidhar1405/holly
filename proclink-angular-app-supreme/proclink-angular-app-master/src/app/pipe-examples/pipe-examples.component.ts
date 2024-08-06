import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
    DatePipe,
    PercentPipe,
    CurrencyPipe,
    SlicePipe,
  ],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.scss',
})
export class PipeExamplesComponent {
  name = 'Nikhil';

  time = Date.now();
}
