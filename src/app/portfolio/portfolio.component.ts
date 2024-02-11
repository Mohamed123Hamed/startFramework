import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  items: Item[] = [
    { pathImg: './assets/imags/poert1.png', altImg: 'citadel' },
    { pathImg: './assets/imags/port2.png', altImg: 'maison' },
    { pathImg: './assets/imags/port3.png', altImg: 'school' },
    { pathImg: './assets/imags/poert1.png', altImg: 'unversity' },
    { pathImg: './assets/imags/port2.png', altImg: 'citadel' },
    { pathImg: './assets/imags/port3.png', altImg: 'school' },
  ];

  flag: boolean = true;
  modlImage: string = '';

  hideItem(element: EventTarget | null, img: HTMLImageElement): void {
    if (element == img) return;
    this.flag = true;
  }
}
