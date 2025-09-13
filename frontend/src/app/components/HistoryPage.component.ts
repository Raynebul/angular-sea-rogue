import { Component, HostListener } from '@angular/core';
import { ImportsModule } from '../imports';

import { options } from '../config/options';

@Component({
  selector: 'historyPage-app',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: '../templates/HistoryPage.component.html',
  styleUrl: '../styles/HistoryPage.component.scss',
})
export class HistoryPageComponent {
  title = 'frontend';
  events: any[];
  currentPage: number = 0;
  currentOption: any = {}

  handlePage(event: any) {
    this.currentPage = event.page;
    this.currentOption = this.events[event.page+1]
    console.log(this.currentOption)
  }
  constructor() {
    this.events = options;
  }
}
