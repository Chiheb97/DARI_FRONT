import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReclamationComponent } from './Reclamation/add-reclamation/add-reclamation.component';
import { AbonnementClientComponent } from './abonnement/abonnement-client/abonnement-client.component';
import { ReclamationAdminComponent } from './Reclamation/reclamation-admin/reclamation-admin.component';
import { AbonnomentAdminComponent } from './abonnement/abonnoment-admin/abonnoment-admin.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [{ path: 'add-reclamation', component: AddReclamationComponent },
{ path:'abonnement-client' , component : AbonnementClientComponent }
,{ path:'reclamation-admin', component: ReclamationAdminComponent },
{ path:'abonnement-admin', component: AbonnomentAdminComponent },
{path: 'home', component : HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
