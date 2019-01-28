import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ApiKeysComponent } from './account/apiKeys/apiKeys.component';
import { OrdersComponent } from './account/orders/orders.component';
import { ChartsComponent } from './account/charts/charts.component';
import { AccoutHomeComponent } from './account/accountHome/accountHome.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent, children: [
    { path: '', component: AccoutHomeComponent, pathMatch: 'full'},
    { path: 'keys', component: ApiKeysComponent, outlet: 'accountOutlet' },
    { path: 'orders', component: OrdersComponent, outlet: 'accountOutlet' },
    { path: 'charts', component: ChartsComponent, outlet: 'accountOutlet' }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
