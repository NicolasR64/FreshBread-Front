import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit{

  /* bakery: Bakery|undefined; */
/*   bakery: Location = 
  {
    id: 2,

  } */
  constructor(private route: ActivatedRoute,){}

  ngOnInit(){
    let bakeryId: number|any = this.route.snapshot.paramMap.get('id');
    if(bakeryId){
      //this.location = this.SLocation.fin(bakery => bakery.id == bakeryId)
    }else{
      /* this.location = undefined; */
    }
  }

}
