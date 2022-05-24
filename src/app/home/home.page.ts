/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
   off=0;arr;
   newArr;
  constructor(public api: ApiService, private router: Router) {}
  show(url){
       this.router.navigate(['/home/details',url]);
  }
  ngOnInit() {
    this.api.getPokemons(this.off).subscribe((res: any)=>{this.arr=res.results;});
  }
   increase(){
     this.off+=10;
     this.api.getPokemons(this.off).subscribe((res: any)=>{this.arr.push(...res.results);});
   }
   decrease(){
     this.off-=10;
    this.api.getPokemons(this.off).subscribe((res: any)=>{this.arr=res.results;});
   }

  loadData(event){
    setTimeout(()=>{
      this.increase();
      event.target.complete();
    },1000);
  }

}
