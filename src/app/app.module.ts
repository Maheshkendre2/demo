import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SamplePageComponent } from './section/pages/sample-page/sample-page.component';
import { HomeComponent } from './section/pages/home/home.component';
import { AboutComponent } from './section/pages/about/about.component';
import { ServicesComponent } from './section/pages/services/services.component';
import { BuyComponent } from './section/pages/buy/buy.component';
import { SellComponent } from './section/pages/sell/sell.component';
import { RentComponent } from './section/pages/rent/rent.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SamplePageComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BuyComponent,
    SellComponent,
    RentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
