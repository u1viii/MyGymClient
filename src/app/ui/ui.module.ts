import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { UilayoutModule } from './uilayout/uilayout.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UilayoutModule
  ]
})
export class UiModule { }
