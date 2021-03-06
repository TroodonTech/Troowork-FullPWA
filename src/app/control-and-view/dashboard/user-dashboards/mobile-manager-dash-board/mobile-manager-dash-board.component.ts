import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { ResponsiveService } from 'src/app/service/responsive.service';

@Component({
  selector: 'app-mobile-manager-dash-board',
  templateUrl: './mobile-manager-dash-board.component.html',
  styleUrls: ['./mobile-manager-dash-board.component.scss']
})
export class MobileManagerDashBoardComponent implements OnInit {
  empName: String;
  role: String;
  name: String;
  employeekey: Number;
  IsSupervisor: Number;
  OrganizationID: Number;
  scheduleIcon;
  isMobile: boolean;
  workOrder = false;
  inspectionDisplay = false;
  livetrackingDisplay = false;
  router: any;
  url_base64_decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return window.atob(output);
  }

  constructor(private loginService: LoginService,private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.workOrder = false;
    this.inspectionDisplay = false;
    this.livetrackingDisplay = false;
    var token = localStorage.getItem('token');
    var encodedProfile = token.split('.')[1];
    var profile = JSON.parse(this.url_base64_decode(encodedProfile));
    this.role = profile.role;
    this.IsSupervisor = profile.IsSupervisor;
    this.name = profile.username;
    this.employeekey = profile.employeekey;
    this.OrganizationID = profile.OrganizationID;
    this.scheduleIcon = profile.isemployeecalendar;

    this.loginService
      .getEmpNameForWelcomeMessage(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.empName = data[0].EmpName;
      });
    // this.loginService
    // .schedulingIcons(this.employeekey, this.OrganizationID)
    // .subscribe((data: any[]) => {
    //   this.scheduleIcon = data[0].IsEmployeeCalendar;
    // });
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
  dropdownData(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
  }
  selectedOpt(opt){
    if(opt == "1")
    {
      this.workOrder = false;
      this.inspectionDisplay = false;
      this.livetrackingDisplay = false;
    }
     if(opt == "2")
    {      
      this.workOrder = true;
      this.inspectionDisplay = false;
      this.livetrackingDisplay = false;
    }
     if(opt == "4")
    {
      this.workOrder = false;
      this.inspectionDisplay =true;
      this.livetrackingDisplay = false;
    }
    if (opt == "5")
    {
      this.workOrder = false;
      this.inspectionDisplay =false;
      this.livetrackingDisplay = true;
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
}


  