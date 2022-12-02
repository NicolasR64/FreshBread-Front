import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit{

  location: Location|undefined;
  constructor(private route: ActivatedRoute,){}

  ngOnInit(){
    let bakeryId: number|any = this.route.snapshot.paramMap.get('id');
    if(bakeryId){
      //this.location = this.SLocation.fin(location => location.id == bakeryId)
    }else{
      this.location = undefined;
    }
  }

}
