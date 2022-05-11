import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AnnoncesComponent } from './Components/annonces/annonces.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackannonceComponent } from './Components/backannonce/backannonce.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AnnoncesComponent,
    BackannonceComponent
  ],
  imports: [
    RouterModule ,
    BrowserModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, 
    NgxSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
