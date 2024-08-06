import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorBoxComponent } from '../color-box/color-box.component';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [FormsModule, ColorBoxComponent],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss',
})
export class ColorGameComponent {
  color = '';

  colorList = ['crimson', 'purple', 'plum'];

  addColor() {
    this.colorList.push(this.color);
  }
}
