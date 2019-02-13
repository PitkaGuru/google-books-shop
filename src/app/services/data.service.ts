import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Volume } from "../shared/models/Volume.model";
import { MessageService } from "./message.service";
import { CartItem } from "../shared/models/CartItem.model";
import { UtilService } from "./util.service";

const baseUrl = environment.baseUrl;
const apiKey = environment.apiKey;

@Injectable()
export class DataService implements OnInit {

  filter;
  cartVolumes: Volume[] = [];
  cartItems: CartItem[] = [];

  private api_searchBook: string = baseUrl + "/volumes?q="
  private api_getVolume: string = baseUrl + "/volumes/"

  constructor(
    private http: HttpClient, 
    public ms: MessageService,
    private util: UtilService
  ){ 
    this.cartVolumes = this.util.getData('cartVolumes');
    this.cartItems = this.util.getData('cartItems');
  }

  ngOnInit(){
  
  }

  searchBook(startIndex: number) {
    return this.http.get<volumeI>(this.api_searchBook + this.filter + `+intitle&startIndex=${startIndex}&maxResults=40&printType=books&${apiKey}`);
  }

  getVolume(id: string){
    return this.http.get<Volume>(this.api_getVolume + id +`?${apiKey}`);
  }

  addToCart(volume: Volume){

    let cartItem: CartItem = {
      db: 1,
      volume: volume
    };
 
  
    if(this.cartVolumes.includes(volume)){
      this.ms.openInfoDialog("Figyelem!","Ezt a könyvet már korábban hozzáadtad a kosárhoz.");
    }else{
      this.cartVolumes.push(volume);
      this.util.setData('cartVolumes',this.cartVolumes);
      this.cartItems.push(cartItem);
      this.util.setData('cartItems',this.cartItems);
      this.ms.openSnackBar("Kosárhoz adva");
    }
  }


}


export interface volumeI{
  items: Volume[];
  kind: string;
  totalItems: number;
}



