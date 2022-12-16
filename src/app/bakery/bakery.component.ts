import { LocationService } from './../services/LocationService';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bakery } from '../models/Bakery';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { Location } from '../models/Location';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit{


  bakery: Bakery =
  {
    id: 1,
    name: "Boulangerie du petit carré",
    adress: "avenue du petit carré numéro 5, Montignies-sur-sambre 6061",
    userId: 1
  }
  
  location01: Location = {
    id: 1,
    name: 'montignies',
    adress: 'avenue du centenaire',
    bakeryId: 2,
    img: 'montignies.png'
  }

  products: Product[] = [
    {
      id: 1,
      name: "pain au chocolat",
      price: 1.84,
      qty: 0,
      desc: "délicieux pain au chocolat fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: "/painAuChocolat.jpg",
      bakeryId: 1
    },
    {
      id: 2,
      name: "croissant",
      price: 1.5,
      qty: 0,
      desc: "délicieux croissant fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: "/croissant.jpg",
      bakeryId: 1
    },
    {
      id: 3,
      name: "baguette",
      price: 2,
      qty: 0,
      desc: "Baguette fait maison à partir d'ingrédient naturelle et de qualité!",
      picture: "/baguette.jpg",
      bakeryId: 1
    }
  ]

  order: Order =
  {
    id: 1,
    date: new Date(),
    location: this.location01,
    products: [],
    state: "shopping",
    userId: 15,
    price: 15
  };

  errorMessage: string|null = null;

  location: any = {};

  constructor(private route: ActivatedRoute, private locationService: LocationService){}

  ngOnInit(){
    // retrieve location
    let locationId: number|any = this.route.snapshot.paramMap.get('id');
    if(locationId){
/*       this.locationService.getLocation(locationId).subscribe((data) => {
        this.location = data;
      }); */
    }else{
      this.errorMessage = "Une erreur inatendue s'est produite, veuillez réessayer plus tard.";
    }

    // retrieve bakery
    // this.bakery = this.bakeryService.getBakeryById();

    // retrieve product by bakery
    // this.products = this.productService.getAllProductByBakeryId();

    // retrieve order
    /* if(this.orderService.getIsCurrentOrder()){
      this.order = this.orderService.getOrderById();
    }else{
      this.order = {
        id: null,
        date: new Date(),
        location: this.location,
        products: [],
        state: "shopping",
        userId: this.cookiesService.get('userId');
      }
    } */

  }

  addQty(id: number){
    if(this.products.find(product => product.id == id)!.qty >= 0){
      this.products.find(product => product.id == id)!.qty++;
    }

  }

  removeQty(id: number){
    if(this.products.find(product => product.id == id)!.qty > 0){
      this.products.find(product => product.id == id)!.qty--;
    }
  }

  clearInstance(){
    
  }

  addInCard(){
    console.log('triggered: addInCard()');
    console.log(this.order);
    this.products.forEach(product => {
      if(product.qty > 0){
        if(this.order.products?.length == 0){
          console.log('je suis le premier produit de la commande');
          this.order.products.push(product);
        }else{
          this.order.products?.forEach(el => {
            if(product.id == el.id){
              el.qty += product.qty;
            }
          });
        }
      }
      // Send update order to db or create it if no exist
      // TO DO
    });
    this.clearInstance();
  }


}


