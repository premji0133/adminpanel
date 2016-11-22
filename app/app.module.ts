import './rxjs-extensions';
import { NgModule }       from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MaterialModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent} from './contactus/contact.component';
//import { TransportationComponent } from './dashboard/transaction/transaction.component';

import { routing } from './routing';

import { DataService } from './dashboard/data.service'


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule, 
    routing,MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,HeaderComponent,SidebarComponent,ContactComponent,
    DashboardComponent,
   
  ],
  providers: [
     DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
