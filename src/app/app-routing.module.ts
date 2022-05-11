import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './Components/annonces/annonces.component';
import { BackannonceComponent } from './Components/backannonce/backannonce.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addannonce', component: AnnoncesComponent },
  { path: 'userannonce', component: BackannonceComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

