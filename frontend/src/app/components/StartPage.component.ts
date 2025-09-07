import { Component } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'startPage-app',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: '../templates/StartPage.component.html',
})
export class StartPageComponent {
  title = 'frontend';
  events: string[];

  constructor() {
    this.events = ['2020', '2021', '2022', '2023'];
  }
}
