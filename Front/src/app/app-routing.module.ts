import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';
import { PrestationComponent } from './prestation/prestation.component';
import { RealisationComponent } from './realisation/realisation.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/quisuisje', pathMatch: 'full' },
  { path: 'quisuisje', component: QuisuisjeComponent  },
  { path: 'prestation', component: PrestationComponent },
  { path: 'realisation', component: RealisationComponent },
  { path: 'temoignage', component: TemoignageComponent  },
  { path: 'contact', component: ContactComponent },
  { path: 'Admin', component: AdminComponent  },
  { path: 'Interface', component: InterfaceAdminComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
