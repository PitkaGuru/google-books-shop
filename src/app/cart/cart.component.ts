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
        console.log("deleteCart");
        this.dataService.cartVolumes = [];
        this.dataService.cartItems = [];
        this.util.deleteData('cartVolumes');
        this.util.deleteData('cartItems'); 
      }
    });

  }

  deleteCartItem(ci: CartItem){
    console.log("deleted CartItem", ci);
  }


  vissza() {
    this.location.back();
  }

}
