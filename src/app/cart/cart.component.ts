import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Location } from '@angular/common';
import { CartItem } from '../shared/models/CartItem.model';
import { UtilService } from '../services/util.service';
import { MessageService } from '../services/message.service';


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

  dbChanged(){
    this.util.setData('cartItems',this.dataService.cartItems);
  }


  vissza() {
    this.location.back();
  }

}
