import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

//Materila biblioteca externa
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';







@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule
  ],
  exports:[
    MatToolbarModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MatSidenavModule,
    RouterModule

    
    
  ]

})
export class SharedModule { }
