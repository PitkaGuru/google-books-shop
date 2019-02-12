import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Volume } from "../shared/models/Volume.model";

const baseUrl = environment.baseUrl;
const apiKey = environment.apiKey;

@Injectable()
export class DataService implements OnInit {

  filter;
  cartIds: string[] = [];

  private api_searchBook: string = baseUrl + "/volumes?q="
  private api_getVolume: string = baseUrl + "/volumes/"

  constructor(private http: HttpClient){ }

  ngOnInit(){

  }

  searchBook(startIndex: number) {
    return this.http.get<volumeI>(this.api_searchBook + this.filter + `+intitle&startIndex=${startIndex}&maxResults=40&printType=books&${apiKey}`);
  }

  getVolume(id: string){
    return this.http.get<Volume>(this.api_getVolume + id +`?${apiKey}`);
  }






  

}


export interface volumeI{
  items: Volume[];
  kind: string;
  totalItems: number;
}



