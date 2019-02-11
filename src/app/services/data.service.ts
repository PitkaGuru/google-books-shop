import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Volume } from "../shared/models/Volume.model";

const baseUrl = environment.baseUrl;

@Injectable()
export class DataService implements OnInit {


  private api_searchBook: string = baseUrl + "/volumes?q="


  constructor(private http: HttpClient){ }

  ngOnInit(){

  }

  searchBook(filter: string, startIndex: number) {
    return this.http.get<volumeI>(this.api_searchBook + filter + `+intitle&startIndex=${startIndex}&maxResults=40`);
  }


  // befizetesSzamlaNew(data) {
  //   return this.http.post<sampleI>(this.api_befizetesSzamlaNew, data);
  // }



  

}

export interface ListI {
  Data: any[];
  TotalCount: number;
}

export interface volumeI{
  items: Volume[];
  kind: string;
  totalItems: number;
}



