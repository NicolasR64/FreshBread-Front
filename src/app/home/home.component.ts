import { Component } from '@angular/core';
import { Location } from '../models/location';

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
      name: 'montignies-sur-sambre',
      img: 'montignies.png'
    },
    {
      id: 2,
      adress: 'avenue de gilly',
      name: 'gilly',
      img: 'gilly.png'
    },
    {
      id: 3,
      adress: 'avenue de gosselies',
      name: 'gosselies',
      img: 'gosselies.png'
    },
  ];

  constructor(){}
}
