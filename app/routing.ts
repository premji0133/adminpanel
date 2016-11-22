import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent} from './contactus/contact.component';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contactus',
    component: ContactComponent
  }
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);