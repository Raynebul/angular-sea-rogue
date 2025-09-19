import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('main_theme') main_theme!: ElementRef<HTMLAudioElement>;
  title = 'frontend';
  events: any[];
  currentPage: number = 0;
  currentOption: any = {}

  handlePage(event: any) {
    this.currentPage = event.page;
    this.currentOption = this.events[event.page+1]
    this.play()

    console.log(this.currentOption)
  }
  constructor() {
    this.events = options;
    setTimeout(() => {
      console.log('1223')
      this.play()
    }, 1000)
  }
   play() {
    this.main_theme.nativeElement.play();
    console.log('gay')
  }
}
