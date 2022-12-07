import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { Location } from '../models/Location';
import { Product } from '../models/Product';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  
  // mock, supprimer pour production
  location01: Location = 
  {
    id: 7,
    name: "montignies-sur-sambre",
    adress: "avenue du centenaire 150, Montignies-sur-sambre 6061",
    bakeryId: null,
    img: '/default'
  };

  location02: Location = 
  {
    id: 8,
    name: "montignies-sur-sambre",
    adress: "avenue du centenaire 150, Montignies-sur-sambre 6061",
    bakeryId: null,
    img: '/default'
  };
  
  products: Product[] = [
    {
      id: 1,
      name: "pain au chocolat",
      price: 1.84,
      qty: 0,
      desc: "délicieux pain au chocolat fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: "/painAuChocolat.jpg"
    },
    {
      id: 2,
      name: "croissant",
      price: 1.5,
      qty: 0,
      desc: "délicieux croissant fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: "/croissant.jpg"
    },
    {
      id: 3,
      name: "baguette",
      price: 2,
      qty: 0,
      desc: "Baguette fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: "/baguette.jpg"
    }
  ]

  
  orders: Order[] = [
    {
      id: 756,
      date: new Date(),
      location: this.location01,
      products: this.products,
      state: 'retrieved',
      userId: 1,
      price: 15
    },
    {
      id: 845,
      date: new Date(),
      location: this.location02,
      products: this.products,
      state: 'delivered',
      userId: 1,
      price: 15
    }
  ]

  constructor(){}

  ngOnInit(): void {}

  displayedColumns: string[] = ['id', 'date', 'location', 'state', 'price'];
  dataSource = new MatTableDataSource(this.orders);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
