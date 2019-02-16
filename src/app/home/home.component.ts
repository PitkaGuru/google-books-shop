import { Component, OnInit, HostListener } from '@angular/core';
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
  startIndex: number = 0;
  submited: boolean = false;
  loading: boolean = false;
  filters: string[] = [];
  n: number = 0;

  constructor(
    private router: Router,
    public dataService: DataService, 
    public ms: MessageService
  ) { }

  ngOnInit(){

    this.search();
  }

  search(){
    this.startIndex = 0;
    this.submited = true;

    if(this.dataService.multisearch){//Multi keresés
      this.n = 0;
      this.volumes = [];
      this.totalItems = 0;
      this.filters = this.dataService.filter.split(",");
      for(let filter of this.filters){
        this.dataService.searchBook(this.startIndex, filter).subscribe(res => {
          this.volumes.push(...res.items);
          this.totalItems += res.totalItems;
          this.n++;
        });
      }
     
    }else{//Sima keresés
      this.loading = true;
      this.dataService.searchBook(this.startIndex, this.dataService.filter).subscribe(res => {
        this.volumes = res.items;
        this.totalItems = res.totalItems;
        this.loading = false;
      });
    }

  }

  getKeresesTitle(){
    if(this.dataService.multisearch){
      return "Multi keresés";
    }else{
      return "Keresés";
    }
  }



  details(id: string){
    this.router.navigate(['volume-detail/' + id]);
  }


  addToCart(volume: Volume){
    this.dataService.addToCart(volume);
  }

  getImagePath(volume: Volume){
  
    if(volume.volumeInfo.imageLinks == undefined){
      return "/assets/images/noimage.svg.png";
    }else{
      return volume.volumeInfo.imageLinks.thumbnail;
    } 

  }

 


  @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        let body = document.body, html = document.documentElement;
        let docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        let windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {

          if(this.totalItems > this.startIndex + 25){ //Ha az előző lapozás nem az utolsó volt

            this.startIndex+=25;

            if(this.dataService.multisearch){//Multi keresés
            
              for(let filter of this.filters){
                this.dataService.searchBook(this.startIndex, filter).subscribe(res => {
                  this.volumes.push(...res.items);
                  this.totalItems += res.totalItems;
                });
              }
  
            }else{//Sima keresés
              this.loading = true;
              this.dataService.searchBook(this.startIndex, this.dataService.filter).subscribe(res => {
                this.volumes.push(...res.items);
                this.loading = false;
              });
            }
          }
       
         
        }
    }





  
}
