import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Volume } from '../shared/models/Volume.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter: string = '';
  volumes: Volume[] = [];
  totalItems: number = 0;
  multisearch: boolean = false;
  startIndex: number = 0;

  constructor(private dataService: DataService, public ms: MessageService) { }

  ngOnInit(){

  }

  search(){
    this.dataService.searchBook(this.filter, this.startIndex).subscribe(res => {
      this.volumes = res.items;
      this.totalItems = res.totalItems;
      console.log("res",res);
    });
  }


  addToCart(id: number){
    console.log(id);
    this.ms.openSnackBar("Kosárhoz adva");
  

  }





  
}
