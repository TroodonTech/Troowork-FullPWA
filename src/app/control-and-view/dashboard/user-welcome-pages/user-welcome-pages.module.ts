import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileManagerWelcomeComponent } from './mobile-manager-welcome/mobile-manager-welcome.component';
// import { SuperadminWelcomeComponent } from './superadmin-welcome/superadmin-welcome.component';
// import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
// import { SupervisorWelcomeComponent } from './supervisor-welcome/supervisor-welcome.component';
// import { EmployeeWelcomeComponent } from './employee-welcome/employee-welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MobileManagerWelcomeComponent]
})
export class UserWelcomePagesModule { }
