import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { SportCreate } from 'src/app/contracts/sport/sportcreate';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  constructor(private http : HttpClientService) { }
  create(sportCreate:SportCreate){
    this.http.post({
      controller:"sport"
    },sportCreate).subscribe(r=>alert('oldi'))
  }
}
