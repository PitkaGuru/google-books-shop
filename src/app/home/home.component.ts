import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(){

  }

  search(){
    this.dataService.searchBook(this.filter).subscribe(res => console.log(res));
  }





  
}