import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileManagerDashBoardComponent } from './mobile-manager-dash-board.component';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
const routes: Routes = [
  {
    path: 'MobileManagerDashBoard',
    component: MobileManagerDashBoardComponent,// varun - superadmindashboard as parent component
    children: [ // varun- child components

      {
        path: 'MobileManagerwelcomePage',
        outlet: 'MobileManagerOut',
        loadChildren: '../../user-welcome-pages/mobile-manager-welcome/mobile-manager-welcome.module#MobileManagerWelcomeModule',

      },
      {
        path: 'Buildview/Createbuilding',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/createbuilding/createbuilding.module#CreatebuildingModule',

      },
      {
        path: 'Buildview/Buildedit/:Facility_Key',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/building-edit/building-edit.module#BuildingEditModule',

      },
      {
        path: 'FloorView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/floor-view/floor-view.module#FloorViewModule',

      },
      {
        path: 'FloorView/FloorCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/floor-create/floor-create.module#FloorCreateModule',

      },
      {
        path: 'FloorView/Flooredit/:Floor_Key/:Facility_Key',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/floor-edit/floor-edit.module#FloorEditModule',

      },
      {
        path: 'ZoneView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/zone-view/zone-view.module#ZoneViewModule',

      },
      {
        path: 'ZoneView/ZoneCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/zone-create/zone-create.module#ZoneCreateModule',

      },
      {
        path: 'ZoneView/Zonedit/:Floor_Key/:Facility_Key/:Zone_Key',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/zone-edit/zone-edit.module#ZoneEditModule',

      },
      {
        path: 'roomView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/room-view/room-view.module#RoomViewModule',

      },
      {
        path: 'roomView/RoomEdit/:RoomKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/room-edit/room-edit.module#RoomEditModule',

      },
      {
        path: 'roomView/RoomCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/room-create/room-create.module#RoomCreateModule',

      },
      {
        path: 'roomView/RoomTypeView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/room-type-view/room-type-view.module#RoomTypeViewModule',

      },
      {
        path: 'roomView/RoomTypeView/RoomTypeCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/room-type-create/room-type-create.module#RoomTypeCreateModule',

      },
      {
        path: 'roomView/RoomTypeView/roomTypeEdit/:RoomTypeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/room-type-update/room-type-update.module#RoomTypeUpdateModule',

      },
      {
        path: 'roomView/FloorTypeView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/floor-type-view/floor-type-view.module#FloorTypeViewModule',

      },
      {
        path: 'roomView/FloorTypeView/FloorTypeCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/floor-type-create/floor-type-create.module#FloorTypeCreateModule',

      },
      {
        path: 'roomView/FloorTypeView/FloorTypeEdit/:FloorTypeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/floor-type-edit/floor-type-edit.module#FloorTypeEditModule',

      },
      {
        path: 'EquipmentView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/equipment-view/equipment-view.module#EquipmentViewModule',

      },
      {
        path: 'EquipmentView/EquipmentCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/equipment-create/equipment-create.module#EquipmentCreateModule',

      },
      {
        path: 'EquipmentView/EquipmentEdit/:EquipKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/equipment-edit/equipment-edit.module#EquipmentEditModule',

      },
      {
        path: 'EquipmentView/EquipmentTypeView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/equipment-type-view/equipment-type-view.module#EquipmentTypeViewModule',

      },
      {
        path: 'EquipmentView/EquipmentTypeView/EquipmentTypeCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/equipment-type-create/equipment-type-create.module#EquipmentTypeCreateModule',

      },
      {
        path: 'EquipmentView/EquipmentTypeView/EquipmentTypeEdit/:EquipTypeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/equipment-type-edit/equipment-type-edit.module#EquipmentTypeEditModule',

      },
      {
        path: 'DepartmentView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/department-view/department-view.module#DepartmentViewModule',

      },
      {
        path: 'DepartmentView/DepartmentCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/department-create/department-create.module#DepartmentCreateModule',

      },
      {
        path: 'DepartmentView/departmentEdit/:DeptKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/department-edit/department-edit.module#DepartmentEditModule',

      },
      {
        path: 'InspectionCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/inspection-create/inspection-create.module#InspectionCreateModule',

      },
      {
        path: 'InspectionView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/inspection-view/inspection-view.module#InspectionViewModule',

      },
      {
        path: 'InspectionView/Managerinspectiontemplate/:InspectionOrderKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/managerinspectiontemplate/managerinspectiontemplate.module#ManagerinspectiontemplateModule',

      },
      {
        path: 'ViewInspectionManager/:InspectionOrderKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/viewinspectionmanager/viewinspectiomanager.module#ViewinspectiomanagerModule',

      },
      {
        path: 'InspectiontemplateCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/inspectiontemplate-create/inspectiontemplate-create.module#InspectiontemplateCreateModule',

      },
      {
        path: 'InspectiontemplateandquestionsView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/inspectiontemplateandquestions-view/inspectiontemplateandquestions-view.module#InspectiontemplateandquestionsViewModule',

      },
      {
        path: 'InspectiontemplateandquestionsView/InspectiontemplateEdit',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/inspectiontemplate-edit/inspectiontemplate-edit.module#InspectiontemplateEditModule',

      },
      {
        path: 'InspectiontemplatedetailEdit/:TemplateID',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/inspectiontemplatedetail-edit/inspectiontemplatedetail-edit.module#InspectiontemplatedetailEditModule',

      },
      {
        path: 'DocumentfolderView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/documents/documentfolder-view/documentfolder-view.module#DocumentfolderViewModule',

      },
      {
        path: 'DocumentfolderView/NewdocumentfolderCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/documents/newdocumentfolder-create/newdocumentfolder-create.module#NewdocumentfolderCreateModule',

      },
      {
        path: 'DocumentfolderView/DocumentfolderEdit/:FormtypeId',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/documents/documentfolder-edit/documentfolder-edit.module#DocumentfolderEditModule',

      },
      {
        path: 'DocumentsUpload',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/documents/documents-upload/documents-upload.module#DocumentsUploadModule',

      },
      {
        path: 'ViewDocuments',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/documents/view-documents/view-documents.module#ViewDocumentsModule',

      },
      {
        path: 'SchedulingView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/scheduling-view/scheduling-view.module#SchedulingViewModule',

      },
      {
        path: 'SchedulingView/CreateBatchWork',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/create-batch-work/create-batch-work.module#CreateBatchWorkModule',

      },
      {
        path: 'SchedulingView/EditBatchWork/:scheduleNameKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/edit-batch-work/edit-batch-work.module#EditBatchWorkModule',

      },
      {
        path: 'BatchScheduleRoom',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/batch-schedule-room/batch-schedule-room.module#BatchScheduleRoomModule',

      },
      {
        path: 'editScheduleForReport/:scheduleKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/edit-assignment-schedule-for-report/edit-assignment-schedule-for-report.module#EditAssignmentScheduleForReportModule',

      },
      {
        path: 'CreateBatchSchedule',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/create-batch-schedule/create-batch-schedule.module#CreateBatchScheduleModule',

      },
      {
        path: 'WorkorderReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/workorder-report/workorder-report.module#WorkorderReportModule',

      },
      {
        path: 'Batch-work-order-Report',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/batch-work-order-report/batch-work-order-report.module#BatchWorkOrderReportModule',

      },
      {
        path: 'BatchScheduleAssignment',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/batch-schedule-assignment-report/batch-schedule-assignment-report.module#BatchScheduleAssignmentReportModule',

      },
      {
        path: 'InspectionReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/inspection-report/inspection-report.module#InspectionReportModule',

      },
      {
        path: 'BarcodeReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/barcode-report/barcode-report.module#BarcodeReportModule',

      },
      {
        path: 'DashboardReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/dashboard-report/dashboard-report.module#DashboardReportModule',

      },
      {
        path: 'CreateEmployee',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/create-employee/create-employee.module#CreateEmployeeModule',

      },
      {
        path: 'Settingusernameandpswrdaftremplcreatebyman/:EmployeeKey/:str/:UserRoleTypeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/settingusernameandpswrdaftremplcreatebyman/settingusernameandpswrdafter.module#SettingusernameandpswrdafterModule',

      },
      {
        path: 'ViewEmployee',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/view-employee/view-employee.module#ViewEmployeeModule',

      },
      {
        path: 'ViewEmployee/EditEmployeedetails/:EmployeeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/edit-employeedetails/edit-employeedetails.module#EditEmployeedetailsModule',

      },
      {
        path: 'MeetingTrainingCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/meeting-training-create/meeting-training-create.module#MeetingTrainingCreateModule',

      },
      {
        path: 'MeetingTrainingView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/meeting-training-view/meeting-training-view.module#MeetingTrainingViewModule',

      },
      {
        path: 'MeetingTrainingView/EventView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/event-view/event-view.module#EventViewModule',

      },
      {
        path: 'MeetingTrainingView/viewEventEmployees/:EventKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/view-employeesof-event/view-employeesof-event.module#ViewEmployeesofEventModule',

      },
      {
        path: 'MeetingTrainingView/viewEventEmployees/:EventKey/MeetingTrainingEdit/:EventKey/:ActionKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/meeting-training-edit/meeting-training-edit.module#MeetingTrainingEditModule',

      },
      {
        path: 'JobTitileView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/job-title-view/job-titile-view.module#JobTitileViewModule',

      },
      {
        path: 'JobTitileView/JobTitleAdd',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/job-title-add/job-titile-add.module#JobTitileAddModule',

      },
      {
        path: 'JobTitileView/JobTitleEdit/:JobTitle_Key',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/job-title-edit/job-titile-edit.module#JobTitileEditModule',

      },
      {
        path: 'manageLoginCredentials',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/manage-login-credentials/manage-login-credentials.module#ManageLoginCredentialsModule',

      },
      {
        path: 'manageLoginCredentials/resetPassword/:EmpKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/reset-pass-word/reset-pass-word.module#ResetPassWordModule',

      },
      {
        path: 'CreateWorkOrder',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/create-workorder/create-work-order.module#CreateWorkOrderModule',

      },
      {
        path: 'createQuickOrder',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/create-quick-order/create-quick-order.module#CreateQuickOrderModule',

      },
      {
        path: 'ViewWorkOrder',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/view-work-orders/view-work-orders.module#ViewWorkOrdersModule',

      },
      {
        path: 'ViewWorkOrder/EditWorkOrder/:WorkorderKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/edit-work-order/edit-work-order.module#EditWorkOrderModule',

      },
      {
        path: 'ViewWorkOrder/UpdateRecurWorkorder/:WorkorderKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/update-recur-workorder/update-recur-workorder.module#UpdateRecurWorkorderModule',

      },
      {
        path: 'CreateBatchWorkOrder',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/create-batch-workorder/create-batch-workorder.module#CreateBatchWorkorderModule',

      },
      {
        path: 'ViewBatchWorkorder',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/view-batch-workorder/view-batch-work-order.module#ViewBatchWorkOrderModule',

      },
      {
        path: 'ViewBatchWorkorder/EditBatchWorkorder/:WorkorderScheduleKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/edit-batch-workorder/edit-batch-work-order.module#EditBatchWorkOrderModule',

      },
      {
        path: 'WorkOrderType',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/work-order-type/work-order-type.module#WorkOrderTypeModule',

      },
      {
        path: 'WorkOrderType/CreateWorkorderType',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/create-workorder-type/create-work-order-type.module#CreateWorkOrderTypeModule',

      },
      {
        path: 'WorkOrderType/EditWorkorderType/:WorkorderTypeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/edit-workorder-type/edit-work-order-type.module#EditWorkOrderTypeModule',

      },
      {
        path: 'managerMyProfile',
        outlet: 'MobileManagerOut',
        loadChildren: '../../user-profiles/manager-myprofile/manager-myprofile-component.module#ManagerMyprofileComponentModule',

      },
      {
        path: 'managerMyProfile/changePasswordManager/:EmployeeKey/:UserRoleName/:IsSupervisor',
        outlet: 'MobileManagerOut',
        loadChildren: '../../user-password-changes/manager-change-pass-word/manager-change-password.module#ManagerChangePasswordModule',

      },
      {
        path: 'changePasswordManager/:EmployeeKey/:UserRoleName/:IsSupervisor',
        outlet: 'MobileManagerOut',
        loadChildren: '../../user-password-changes/manager-change-pass-word/manager-change-password.module#ManagerChangePasswordModule',

      },
      {
        path: 'employeeDowntimeReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/employees-downtime-report/employees-downtime-report.module#EmployeesDowntimeReportModule',

      },
      {
        path: 'inventoryReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/inventory-report/inventory-report.module#InventoryReportModule',

      },
      {
        path: 'BarchartReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/barchart-report/barchart-report.module#BarchartReportModule',

      },
      // {
      //   path: 'createshift',
      //   outlet: 'MobileManagerOut',
      //   loadChildren: '../../../manager/scheduling/createshift/createshift.module#CreateshiftModule',

      // },
      // {
      //   path: 'ViewShift',
      //   outlet: 'MobileManagerOut',
      //   loadChildren: '../../../manager/scheduling/viewshift/viewshift.module#ViewshiftModule',

      // },
      // {
      //   path: 'ViewShift/EditShift/:Idemployeeshift',
      //   outlet: 'MobileManagerOut',
      //   loadChildren: '../../../manager/scheduling/editshift/editshift.module#EditshiftModule',

      // },
      {
        path: 'Scheduler',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/schedulerNew/scheduler.module#SchedulerModule',
      },
      // {
      //   path: 'ViewSchedulerForEmployee',
      //   outlet: 'MobileManagerOut',
      //   loadChildren: '../../../manager/people/view-employee-scheduler/view-employee-scheduler.module#ViewEmployeeSchedulerModule',
      // },

      {
        path: 'RequestsFromEmployees',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/pto-requestsfrom-employees/ptorequestsfromemployees.module#PtorequestsfromemployeesModule',
      },
      {
        path: 'RequestsFromEmployees/PTORequestAction/:requestID',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/pto-request-action/pto-request-action.module#PtoRequestActionModule',
      },
      {
        path: 'TradeRequestsFromEmployees',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/trade-requestsfrom-employees/trade-requestfrom-employees.module#TradeRequestfromEmployeesModule',
      },
      {
        path: 'TradeRequestsFromEmployees/TradeRequestAction/:requestID',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/trade-request-action/trade-request-action.module#TradeRequestActionModule',
      },
      {
        path: 'ScheduleEmployee',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/view-employee-weekly-schedule/view-employee-weekly-schedule.module#ViewEmployeeWeeklyScheduleModule',
      },
      {
        path: 'ScheduleEmployee/ScheduleEmployeeDetail/:EmployeeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/view-employee-weekly-schedule-detail/view-employee-weekly-schedule-detail.module#ViewEmployeeWeeklyScheduleDetailModule',
      },
      {
        path: 'EmployeeWorkingHourEmpListView/EmployeeWorkingHourList/:EmployeeKey/manualEmpOff/:EmployeeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/manual-employee-leave/manual-employee-leave.module#ManualEmployeeLeaveModule',
      },
      {
        path: 'EmployeeWorkingHourEmpListView',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/employee-working-hour-emp-list-view/employee-working-hour-emp-list-view.module#EmployeeWorkingHourEmpListViewModule',
      },
      {
        path: 'EmployeeWorkingHourEmpListView/EmployeeWorkingHourList/:EmployeeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/employee-working-hour-list/employee-working-hour-list.module#EmployeeWorkingHourListModule'
      },
      {
        path: 'EmployeeWorkingHourEmpListView/EmployeeWorkingHourList/:EmployeeKey/EmployeeWorkingHourAdd/:EmployeeKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/employee-working-hour-add/employee-working-hour-add.module#EmployeeWorkingHourAddModule',
      },
      {
        path: 'createshift',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/createshift/createshift.module#CreateshiftModule',

      },
      {
        path: 'ViewShift',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/viewshift/viewshift.module#ViewshiftModule',

      },
      {
        path: 'ViewShift/EditShift/:Idemployeeshift',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/editshift/editshift.module#EditshiftModule',

      },
      {
        path: 'schedulerReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/scheduler-report/scheduler-report.module#SchedulerReportModule',
      },
      {
        path: 'GenerateQRCode',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/generate-qr-code/generate-qr-code.module#GenerateQrCodeModule',

      },
      {
        path: 'GenerateQRCode/WOQRCodeView/:RoomKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/qr-code-view/qr-code-view.module#QrCodeViewModule'
      },
      {
        path: 'GenerateQRCode/FeedbackQRCodeView/:RoomKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/qr-code-view-feedback/qr-code-view-feedback.module#QrCodeViewFeedbackModule'
      },
      {
        path: 'GenerateQRCodeList',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/generate-qr-code-list/generate-qr-code-list.module#GenerateQrCodeListModule'
      },
      {
        path: 'QrCodeViewList/:QRCodeRoomKey/:checkvaluetag',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/qr-code-view-list/qr-code-view-list.module#QrCodeViewListModule'

      },
      {
        path: 'ViewServiceRequest',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/view-service-request/view-service-request.module#ViewServiceRequestModule',
      },
      {
        path: 'reviewReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/review-report/review-report.module#ReviewReportModule',
      },
      {
        path: 'feedbackManage',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/feedback-manage/feedback-manage.module#FeedbackManageModule',
      },
      {
        path: 'woprogressReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/workorder-in-progress-report/workorder-in-progress-report.module#WorkorderInProgressReportModule',
      },
      {
        path: 'ViewShift/ViewGroupEmployees/:employeegroupID/:groupName',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/view-employeesof-group/view-employeesof-group.module#ViewEmployeesofGroupModule'

      },
      {
        path: 'inspectionAuditReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/inspection-audit-report/inspection-audit-report.module#InspectionAuditReportModule'

      },
      {
        path: 'viewMasterShifts',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/view-master-shifts/view-master-shifts.module#ViewMasterShiftsModule'

      },
      {
        path: 'viewMasterShifts/CreateMasterShift',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/create-master-shifts/create-master-shifts.module#CreateMasterShiftsModule'

      },
      {
        path: 'viewMasterShifts/masterShiftEdit/:masterShiftID',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/edit-master-shifts/edit-master-shifts.module#EditMasterShiftsModule'

      },
      {
        path: 'ManualSchedulerCronjob',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/scheduling/scheduler-cronjob-manual/scheduler-cronjob-manual.module#SchedulerCronjobManualModule'

      },
      {
        path: 'viewIntervaltype',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/view-interval-types/view-interval-types.module#ViewIntervalTypesModule'

      },
      {
        path: 'viewIntervaltype/EditIntervalTypeColor/:intervalID',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/edit-interval-type-color/edit-interval-type-color.module#EditIntervalTypeColorModule'

      },
      {
        path: 'viewWORemainingDetails/:fromdt/:todt/:empKey/:wotypeKey/:empName/:wotypeName',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/view-remaining-workorders-details/view-remaining-workorders-details.module#ViewRemainingWorkordersDetailsModule'

      },
      {
        path: 'picklistReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/picklist-report/picklist-report.module#PicklistReportModule'

      },
      {
        path: 'inspectionDetailReport',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/reports/inspection-detailed-report/inspection-detailed-report.module#InspectionDetailedReportModule'
      },
      {
        path: 'GenerateQRCode/CleaningQRCodeView/:RoomKey',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inventory/cleaning-qr-code-view/cleaning-qr-code-view.module#CleaningQrCodeViewModule'
      },

      {
        path: 'welcomePage/expiryNearDetails',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../dashboard/manager-dashboard-pages/expiring-assignments-details/expiring-assignments-details.module#ExpiringAssignmentsDetailsModule'
      },
      {
        path: 'welcomePage/expiredDetails',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../dashboard/manager-dashboard-pages/expired-assignments-details/expired-assignments-details.module#ExpiredAssignmentsDetailsModule'
      },

      {
        path: 'TradeRequestsFromEmployees/TradeRequestDetails/:requestID',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/trade-request-details/trade-request-details.module#TradeRequestDetailsModule',
      },
      {
        path: 'Appinfo',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/people/appinfo/appinfo.module#AppinfoModule',

      },
      {
        path: 'MobilecreateWork',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/mobilecreate-work/mobilecreate-work.module#MobilecreateWorkModule',

      },
      {
        path: 'MobilecreateQuick',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/mobilecreate-quick/mobilecreate-quick.module#MobilecreateQuickModule',

      },
      {
        path: 'MobileviewWork',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/work-order/mobileview-work/mobileview-work.module#MobileviewWorkModule',

      },
      {
        path: 'MobileinspectionCreate',
        outlet: 'MobileManagerOut',
        loadChildren: '../../../manager/inspection/mobileinspection-create/mobileinspection-create.module#MobileinspectionCreateModule',

      },
     

      
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot()


  ],
  declarations: [MobileManagerDashBoardComponent],
  exports: [MobileManagerDashBoardComponent]
})
export class MobileManagerDashBoardModule { }
