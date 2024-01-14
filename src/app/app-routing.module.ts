import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePageComponent } from './section/pages/sample-page/sample-page.component';
import { HomeComponent } from './section/pages/home/home.component';
import { AboutComponent } from './section/pages/about/about.component';
import { ServicesComponent } from './section/pages/services/services.component';
import { BuyComponent } from './section/pages/buy/buy.component';
import { SellComponent } from './section/pages/sell/sell.component';
import { RentComponent } from './section/pages/rent/rent.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'sample', component:SamplePageComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'buy', component:BuyComponent},
  {path: 'sell', component:SellComponent},
  {path: 'rent', component:RentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
