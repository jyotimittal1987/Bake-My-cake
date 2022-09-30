import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { HomeComponent } from './home/home.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home/:id",
    component: CakeDetailComponent
  },
  // {
  //   path: "order", component: OrderFormComponent
  // },
  
    {
      path: "**",
      component: NotfoundcomponentComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
