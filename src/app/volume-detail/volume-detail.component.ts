import { Component, OnInit } from '@angular/core';
import { Volume } from '../shared/models/Volume.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-volume-detail',
  templateUrl: './volume-detail.component.html',
  styleUrls: ['./volume-detail.component.scss']
})
export class VolumeDetailComponent implements OnInit {

  id: string;
  volume: Volume = new Volume();
  ready: boolean = false;


  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    public ms: MessageService,
    private location: Location
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.dataService.getVolume(this.id).subscribe(res => {
          this.volume = res;
          this.ready = true;
          console.log(this.volume);
        });
      }
    );
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

  vissza() {
    this.location.back();
  }



}
