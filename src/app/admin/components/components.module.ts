import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { SportsModule } from './sports/sports.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    SportsModule
  ]
})
export class ComponentsModule { }
