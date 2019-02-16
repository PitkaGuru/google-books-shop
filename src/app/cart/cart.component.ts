import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Location } from '@angular/common';
import { CartItem } from '../shared/models/CartItem.model';
import { UtilService } from '../services/util.service';
import { MessageService } from '../services/message.service';
import { Volume } from '../shared/models/Volume.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(
    public dataService: DataService, 
    private location: Location,
    private util: UtilService,
    public ms: MessageService
  ) { }

  ngOnInit() {

    for(let ci of this.dataService.cartItems){
      console.log(ci);
    }
    
  }

  deleteCart(){
   
    return this.ms.openTorlesDialog().subscribe(yes => {
      if (yes) {
        this.dataService.cartItems = [];
        this.util.deleteData('cartVolumes');
        this.util.deleteData('cartItems'); 
      }
    });

  }

  deleteCartItem(ci: CartItem){

    return this.ms.openTorlesDialog().subscribe(yes => {
      if (yes) {
   
        //Kivágom a CartItemet 
        let index = this.dataService.cartItems.indexOf(ci, 0);
        if (index > -1) {
          this.dataService.cartItems.splice(index, 1);
        }
        this.util.deleteData('cartItems'); 
        this.util.setData('cartItems',this.dataService.cartItems);
      }
    });
   
  }

  dbChanged(ci: CartItem){
    ci.osszar = ci.volume.saleInfo.retailPrice.amount * ci.db;
    this.util.setData('cartItems',this.dataService.cartItems);
  }


  vissza() {
    this.location.back();
  }

  getImagePath(volume: Volume){
  
    if(volume.volumeInfo.imageLinks == undefined){
      return "/assets/images/noimage.svg.png";
    }else{
      return volume.volumeInfo.imageLinks.thumbnail;
    } 
    
  }

  getVegosszeg(){

    let vegOsszeg = 0;
    for(let ci of this.dataService.cartItems){
      vegOsszeg += ci.osszar;
    }
    return vegOsszeg;

  }

  

}
