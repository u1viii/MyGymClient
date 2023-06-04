import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    SportsComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:SportsComponent}
    ]), MatFormFieldModule, MatInputModule
  ]
})
export class SportsModule { }
