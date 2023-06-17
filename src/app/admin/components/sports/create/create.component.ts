import { Component } from '@angular/core';
import { SportCreate } from 'src/app/contracts/sport/sportcreate';
import { HttpClientService, RequestParameters } from 'src/app/services/common/http-client.service';
import { SportService } from 'src/app/services/common/models/sport.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private http : HttpClientService, private service : SportService){
    this.service.get()
  }
  create(name : HTMLInputElement){
    const createSport : SportCreate = new SportCreate();
    createSport.name = name.value;
    this.service.create(createSport);
  }
}
