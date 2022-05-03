import { VisiteComponent } from './components/visite/visite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultVisitesComponent } from './components/consult-visites/consult-visites.component';

const routes: Routes = [
  { path: 'visites', component: VisiteComponent },
  { path: 'Allvisites', component: ConsultVisitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
