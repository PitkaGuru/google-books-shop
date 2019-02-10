import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

const baseUrl = environment.baseUrl;

@Injectable()
export class DataService implements OnInit {


  private api_searchBook: string = baseUrl + "/volumes?q="


  constructor(private http: HttpClient){ }

  ngOnInit(){

  }

  searchBook(filter: string) {
    return this.http.get(this.api_searchBook + filter);
  }


  // befizetesSzamlaNew(data) {
  //   return this.http.post<sampleI>(this.api_befizetesSzamlaNew, data);
  // }



  

}

export interface ListI {
  Data: any[];
  TotalCount: number;
}

export interface sampleI{
  Authorized: boolean;
  Data: any[];
  Message: string;
  Success: boolean;
  TotalCount: number;
}



