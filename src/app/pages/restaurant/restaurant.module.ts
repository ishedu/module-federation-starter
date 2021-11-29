import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import {RouterModule, Routes} from "@angular/router";
import { RestaurantDetailComponent } from './detail/detail.component';
import {OrderComponent} from "../order/order.component";

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  {
    path: ':slug',
    component: RestaurantDetailComponent,
  },
  {
    path: ':slug/order',
    component: OrderComponent,
  }
];

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
