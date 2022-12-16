import { Component } from '@angular/core';
import { Order } from '../models/Order';
import { Location } from '../models/Location';
import { Bakery } from '../models/Bakery';
import { Product } from '../models/Product';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  bakery: Bakery = {
    id: 1,
    name: 'Boulangerie du petit carré',
    adress: 'avenue du petit carré numéro 5, Montignies-sur-sambre 6061',
    userId: 1,
  };

  products: Product[] = [
    {
      id: 1,
      name: 'pain au chocolat',
      price: 1.84,
      qty: 2,
      desc: "délicieux pain au chocolat fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: '/painAuChocolat.jpg',
      bakeryId: 1
    },
    {
      id: 2,
      name: 'croissant',
      price: 1.5,
      qty: 1,
      desc: "délicieux croissant fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: '/croissant.jpg',
      bakeryId: 1
    },
    {
      id: 3,
      name: 'baguette',
      price: 2,
      qty: 4,
      desc: "Baguette fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: '/baguette.jpg',
      bakeryId: 1
    },
  ];

  location01: Location = {
    id: 1,
    name: 'montignies',
    adress: 'avenue du centenaire',
    bakeryId: 1,
    img: 'montignies',
  }

  order: Order = {
    id: 1,
    date: new Date(),
    location: this.location01,
    products: [],
    state: 'shopping',
    userId: 15,
    price: 15,
  };

  column: string[] = ['id', 'name', 'price', 'qty', 'global_price'];
  dataSource = new MatTableDataSource(this.products);

  getTotalCost() {
    return this.products.map(t => t.price * t.qty).reduce((acc, value) => acc + value, 0);
  }
}
