import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppinfoComponent } from './appinfo.component';
import { ManagerDashBoardModule } from '../../../dashboard/user-dashboards/manager-dash-board/manager-dash-board.module';

const routes: Routes = [
  {
    path: '',
   component: AppinfoComponent
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    ManagerDashBoardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppinfoComponent]
})
export class AppinfoModule { }
