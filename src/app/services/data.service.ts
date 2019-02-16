import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Volume } from "../shared/models/Volume.model";
import { MessageService } from "./message.service";
import { CartItem } from "../shared/models/CartItem.model";
import { UtilService } from "./util.service";
import { VolumeList } from "../shared/models/VolumeList.model";

const baseUrl = environment.baseUrl;
const apiKey = environment.apiKey;

@Injectable()
export class DataService implements OnInit {

  filter = '';
  multisearch: boolean = false;
  cartItems: CartItem[] = [];

  private api_searchBook: string = baseUrl + "/volumes?q="
  private api_getVolume: string = baseUrl + "/volumes/"

  constructor(
    private http: HttpClient, 
    public ms: MessageService,
    private util: UtilService
  ){ 
   
    let cItems = this.util.getData('cartItems');
   
    if(cItems == false){
      this.cartItems = [];
    }else{
      this.cartItems = cItems;
    }
    console.log('cartItems', this.cartItems);

  }

  ngOnInit(){
  
  }

  searchBook(startIndex: number, filter: string) {
    return this.http.get<VolumeList>(this.api_searchBook + filter + `+intitle&startIndex=${startIndex}&maxResults=25&printType=books&${apiKey}`);
  }

  getVolume(id: string){
    return this.http.get<Volume>(this.api_getVolume + id +`?${apiKey}`);
  }

  addToCart(volume: Volume){

    let cartItem: CartItem = {
      db: 1,
      volume: volume,
      egysegar: volume.saleInfo.retailPrice.amount,
      osszar: volume.saleInfo.retailPrice.amount
    };
    console.log("addedVolume",volume);
    if(!this.egyedi(volume)){
      this.ms.openInfoDialog("Figyelem!","Ezt a könyvet már korábban hozzáadtad a kosárhoz.");
    }else{
      this.cartItems.push(cartItem);
      this.util.setData('cartItems',this.cartItems);
      this.ms.openSnackBar("Kosárhoz adva");
    }
  }

  egyedi(volume: Volume){

    for(let cartItem of this.cartItems){
      if(volume.id == cartItem.volume.id){
        return false;
      }
    }
    return true;

  }


 


}





