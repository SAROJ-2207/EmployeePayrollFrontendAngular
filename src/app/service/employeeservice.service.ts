import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../model/employee-model';
import { HomeComponent } from '../component/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  id:Number =0;
  employee:any;

  constructor(private http:HttpClient,) { }

  updateData(Eid:Number,employee:any){
    this.id=Eid;
    this.employee=employee;
  }

  getEmployeeList(){
    return this.http.get("http://localhost:8787/empPayrollService/getAllData");
  }

  insertEmployee(employee : any){
    return this.http.post("http://localhost:8787/empPayrollService/addemployee",employee);
  }

  deleteEmployeeByID(Did : Number){
    return this.http.delete("http://localhost:8787/empPayrollService/delete/"+Did);
  }

  updateEmployeeById(Uid:Number,employee:any){
    return this.http.put("http://localhost:8787/empPayrollService/update-employee/"+Uid,employee);
  }
}
