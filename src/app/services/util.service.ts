import { Injectable, OnInit } from "@angular/core";


@Injectable()
export class UtilService implements OnInit {


  constructor(){ }

  ngOnInit(){

  }


setData(key,obj){
  let values = JSON.stringify(obj);
  localStorage.setItem(key,values);
}

getData(key){
  if(localStorage.getItem(key) != null){
  return JSON.parse(localStorage.getItem(key));
  }else{
      return false;
  }
}

deleteData(key){
  localStorage.removeItem(key);
}





 

}





