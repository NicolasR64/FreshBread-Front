import { Component } from '@angular/core';
import { Location } from '../models/Location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  locations: Location[] = [
    {
      id: 1,
      adress: 'avenue du centenaire',
      name: 'montignies',
      img: 'montignies.png',
      bakeryId: 1
    },
    {
      id: 2,
      adress: 'avenue de gilly',
      name: 'gilly',
      img: 'gilly.png',
      bakeryId: 2
    },
    {
      id: 3,
      adress: 'avenue de gosselies',
      name: 'gosselies',
      img: 'gosselies.png',
      bakeryId: 3
    },
  ];

  constructor(){}
}
