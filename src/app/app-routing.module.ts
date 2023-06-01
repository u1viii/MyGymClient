import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
import { UsersComponent } from './admin/components/users/users.component';
import { SportsComponent } from './admin/components/sports/sports.component';
import { UilayoutComponent } from './ui/uilayout/uilayout.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      // { path: "users", loadChildren: () => import('./admin/components/users/users.module').then(mod => mod.UsersModule) },
      // { path: "sports", loadChildren: () => import('./admin/components/sports/sports.module').then(mod => mod.SportsModule) }
      { path: "users", component:UsersComponent },
      { path: "sports", component:SportsComponent }
    ]
  },
  { path : "", component: UilayoutComponent, children:[
    {path:"home", component: HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
