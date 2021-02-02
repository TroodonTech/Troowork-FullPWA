import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MobileManagerWelcomeComponent} from './mobile-manager-welcome.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: MobileManagerWelcomeComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),

  ],
  declarations: [MobileManagerWelcomeComponent]
})
export class MobileManagerWelcomeModule { }
