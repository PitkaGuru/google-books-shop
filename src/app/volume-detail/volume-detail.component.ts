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
  loading: boolean = true;


  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    public ms: MessageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.dataService.getVolume(this.id).subscribe(res => {
          this.volume = res;
          this.loading = false;
          console.log(this.volume);
        });
      }
    );
  }


  addToCart(volume: Volume){
    this.dataService.addToCart(volume);
  }

  vissza() {
    this.location.back();
  }

  getImagePath(volume: Volume){
  
    if(volume.volumeInfo.imageLinks == undefined){
      return "/assets/images/noimage.svg.png";
    }else{
      return volume.volumeInfo.imageLinks.thumbnail;
    } 

  }



}
