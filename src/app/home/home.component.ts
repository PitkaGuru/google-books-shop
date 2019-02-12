import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Volume } from '../shared/models/Volume.model';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  volumes: Volume[] = [];
  totalItems: number = 0;
  multisearch: boolean = false;
  startIndex: number = 0;
  submited: boolean = false;

  constructor(
    private router: Router,
    public dataService: DataService, 
    public ms: MessageService
  ) { }

  ngOnInit(){

    this.search();
  }

  search(){
    this.submited = true;
    this.dataService.searchBook(this.startIndex).subscribe(res => {
      this.volumes = res.items;
      this.totalItems = res.totalItems;
      console.log("res",res);
    });
  }

  details(id: string){
    this.router.navigate(['volume-detail/' + id]);
  }


  addToCart(id: string){
    console.log(id);
    if(this.dataService.cartIds.includes(id)){
      this.ms.openInfoDialog("Figyelem!","Ezt a könyvet már korábban hozzáadtad a kosárhoz.");
    }else{
      this.dataService.cartIds.push(id);
      this.ms.openSnackBar("Kosárhoz adva");
    }
  }





  
}
