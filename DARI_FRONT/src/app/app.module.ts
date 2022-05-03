import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisiteComponent } from './components/visite/visite.component';
import { CreditComponent } from './components/credit/credit.component';
import { ReactiveFormsModule  ,FormGroup, FormControl,FormsModule } from '@angular/forms';
import { ConsultVisitesComponent } from './components/consult-visites/consult-visites.component';


@NgModule({
  declarations: [
    AppComponent,
    VisiteComponent,
    CreditComponent,
    ConsultVisitesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
