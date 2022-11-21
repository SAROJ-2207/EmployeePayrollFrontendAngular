import { ThisReceiver } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee-model';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router, 
    private service: EmployeeserviceService   
  ) { }

  list:any;
  count : Number = 0;

  ngOnInit(): void {
    this.service.getEmployeeList().subscribe((data:any) =>{
      console.log(data);
      this.list= data.data;
    });
  }


onDelete(id:Number): void{
  alert("delete successfully");
  this.service.deleteEmployeeByID(id).subscribe((data:any)=>{
  this.list=data.data;
  this.ngOnInit();
});
}

onUpdate(id:Number){
   this.router.navigate(['updateEmp', id]);
 }

}
