import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {GraciasComponent} from './components/gracias/gracias.component';
import {RegistroComponent} from './components/registro/registro.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'producto/:id', component: ProductComponent
  },
  {
    path: 'carro', component: CartComponent
  },
  {
    path: 'pago', component: CheckoutComponent
  },
  {
    path: 'gracias', component: GraciasComponent
  },

  {
    path:'registro', component:RegistroComponent
  },
  {
    path:'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
