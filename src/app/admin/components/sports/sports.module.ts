import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:SportsComponent}
    ])
  ]
})
export class SportsModule { }
