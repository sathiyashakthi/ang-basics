import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from'@angular/common/http'
import {AppRoutingModule,RoutingComponents} from './app-routing.modules';
import { DepartmentListComponent } from './department-list/department-list.component'
@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    
    EmployeeDetailsComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
