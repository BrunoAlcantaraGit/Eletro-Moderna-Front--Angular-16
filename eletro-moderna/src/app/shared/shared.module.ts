import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

//Materila biblioteca externa
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';









@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    HomeComponent,
    MatCardModule

    
    
  ]

})
export class SharedModule { }
