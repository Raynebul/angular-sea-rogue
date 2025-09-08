import { Component, HostListener } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'startPage-app',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: '../templates/StartPage.component.html',
  styleUrl: '../styles/StartPage.component.scss'
})

export class StartPageComponent {
  title = 'frontend';
  events: string[];

  constructor() {
    this.events = ['2000', '2013', '2025'];
  }

  x = 0;
  y = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const target = (event.target as HTMLElement).getBoundingClientRect();
    this.x = event.clientX - target.left;
    this.y = event.clientY - target.top;
  }

}
