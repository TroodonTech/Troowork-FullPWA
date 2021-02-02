import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/service/responsive.service';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-mobile-manager-welcome',
  templateUrl: './mobile-manager-welcome.component.html',
  styleUrls: ['./mobile-manager-welcome.component.scss']
})
export class MobileManagerWelcomeComponent implements OnInit {
  isMobile: Boolean;
  showmenu;
  workOrder = false;
  scanforworkDisplay=false;
  inspectionDisplay = false;
  livetrackingDisplay = false;
  findemployeeDisplay = false;
  schedulerviewDisplay= false;

  constructor(private responsiveService: ResponsiveService, private router: Router) { }

  ngOnInit() {
    this.showmenu = true;
    this.workOrder = false;
    this.scanforworkDisplay= false;
    this.inspectionDisplay = false;
    this.livetrackingDisplay = false;
    this.findemployeeDisplay = false;
    this.schedulerviewDisplay= false;
    this.onResize();
    this.responsiveService.checkWidth();

  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
   document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(189, 238, 247, 0.8)";
    
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  selectedOpt(opt){
    if(opt == "1")
    {
      this.showmenu = true;
      this.workOrder = false;
      this.inspectionDisplay = false;
      this.livetrackingDisplay = false;
      this.findemployeeDisplay = false;
      this.schedulerviewDisplay= false;
    }
     if(opt == "2")
    {     
      this.showmenu = false; 
      this.workOrder = true;
      this.inspectionDisplay = false;
      this.livetrackingDisplay = false;
      this.findemployeeDisplay = false;
      this.schedulerviewDisplay= false;
    }
    if(opt == "3")
    {
      this.showmenu = false; 
      this.workOrder = false;
      this.scanforworkDisplay= true;
      this.inspectionDisplay =false;
      this.livetrackingDisplay = false;
      this.findemployeeDisplay = false;
      this.schedulerviewDisplay= false;
    }
     if(opt == "4")
    {
      this.showmenu = false; 
      this.workOrder = false;
      this.inspectionDisplay =true;
      this.livetrackingDisplay = false;
      this.findemployeeDisplay = false;
      this.schedulerviewDisplay= false;
    }
    if (opt == "5")
    {
      this.showmenu = false; 
      this.workOrder = false;
      this.inspectionDisplay =false;
      this.livetrackingDisplay = true;
      this.findemployeeDisplay = false;
      this.schedulerviewDisplay= false;
    }
    if (opt == "6")
    {
      this.showmenu = false; 
      this.workOrder = false;
      this.inspectionDisplay =false;
      this.livetrackingDisplay = false;
      this.findemployeeDisplay = true;
      this.schedulerviewDisplay= false;
    }
    if (opt == "7")
    {
      this.showmenu = false; 
      this.workOrder = false;
      this.inspectionDisplay =false;
      this.livetrackingDisplay = false;
      this.findemployeeDisplay = false;
      this.schedulerviewDisplay= true;
    }
  }
  createwo(){
    this.router.navigate(['/MobileManagerDashBoard', { outlets: { MobileManagerOut: ['MobilecreateWork'] } }]);  // redirect to Manager
  }
  createqo(){
    this.router.navigate(['/MobileManagerDashBoard', { outlets: { MobileManagerOut: ['MobilecreateQuick'] } }]);  // redirect to Manager
  }
  viewwo(){
    this.router.navigate(['/MobileManagerDashBoard', { outlets: { MobileManagerOut: ['MobileviewWork'] } }]);  // redirect to Manager
  }
  creati(){
    this.router.navigate(['/MobileManagerDashBoard', { outlets: { MobileManagerOut: ['MobileinspectionCreate'] } }]);  // redirect to Manager
  }
  viewi(){
    this.router.navigate(['/MobileManagerDashBoard', { outlets: { MobileManagerOut: ['InspectionView'] } }]);  // redirect to Manager
  }
  
}

