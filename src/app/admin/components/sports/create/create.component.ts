import { Component } from '@angular/core';
import { SportCreate } from 'src/app/contracts/sport/sportcreate';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { SportService } from 'src/app/services/common/models/sport.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  // constructor(private sportService : SportService) {
  // }
  constructor(private http : HttpClientService){}
  create(name : HTMLInputElement){
    const sportCreate : SportCreate = new SportCreate();
    sportCreate.name = name.value;
    this.http.post({
      controller:"sport"
    },{name : name.value}).subscribe(r=>alert('oldi'))
    // this.sportService.create(sportCreate);
  }
}
