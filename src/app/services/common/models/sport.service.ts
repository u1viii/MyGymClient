import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { SportCreate } from 'src/app/contracts/sport/sportcreate';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  constructor(private http : HttpClientService) { }
  get(){
    this.http.get({
      controller:"sports"
    }).subscribe(res=>{
      console.log(res);
    })
  }
  create(sportCreate:SportCreate){
    this.http.post({
      controller:"sports"
    },sportCreate).subscribe(r=>alert('oldi'))
  }
}
