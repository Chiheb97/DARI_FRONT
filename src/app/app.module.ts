import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddReclamationComponent } from './Reclamation/add-reclamation/add-reclamation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AbonnementClientComponent } from './abonnement/abonnement-client/abonnement-client.component';
import { ReclamationAdminComponent } from './Reclamation/reclamation-admin/reclamation-admin.component';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AbonnomentAdminComponent } from './abonnement/abonnoment-admin/abonnoment-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddReclamationComponent,
    AbonnementClientComponent,
    ReclamationAdminComponent,
    AbonnomentAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,  
    NgbModalModule,
    NgbModule,
    FormsModule
    
      

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
