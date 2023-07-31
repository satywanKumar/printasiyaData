import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard], children:[
    {path:'',component:ProductListComponent},
    {path:'product',component:HomeComponent},
    {path:'add-product',component:AddProductComponent},
    
  ]},
  {path:'',component:DashboardComponent,canActivate:[AuthGuard], children:[
    {path:'',component:ProductListComponent},
    {path:'product',component:HomeComponent},
    {path:'add-product',component:AddProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
