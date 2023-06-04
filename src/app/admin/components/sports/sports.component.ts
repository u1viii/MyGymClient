import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent {
  constructor(private http: HttpClientService) {
  }
  ngOnInit(): void {
    // this.http.get({
    //   controller:"sports"
    // },1).subscribe(data=>{
    //   console.log(data);
    // });
  }
}
