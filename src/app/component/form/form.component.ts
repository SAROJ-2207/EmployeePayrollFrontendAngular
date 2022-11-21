import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee-model';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  Id: any = this.route.snapshot.paramMap.get("id");

  constructor(private router:Router,
    private service:EmployeeserviceService,
    private route:ActivatedRoute) { }
    
  ngOnInit(): void {
    if(this.service.id != 0){
    this.employee = this.service.employee;
    this.router.navigate([""])
    }
  }
  employee:EmployeeModel = new EmployeeModel("","","","",0,"",new Date, "", "","")

  onSubmit():void{
    if(this.service.id != 0){
     this.service.updateEmployeeById(this.service.id,this.service.employee).subscribe(( data : any) =>{
      this.router.navigate([""])
     })   
    }else{
      console.log(this.employee)
      this.service.insertEmployee(this.employee).subscribe((data:any) =>{
       this.router.navigate([""])
      })
    }
    
  }

  onUpdatePerson(){
    console.log(this.Id)
    this.service.updateEmployeeById(this.Id, this.employee).subscribe((res:any)=>
    {
      this.router.navigate(["/"]);
    }
    )
  }

  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }

deptName: any;
emps:any = "";
allEmp : Array<any>=[];  
tempArr : Array<any> = [];
depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
checkBoxChange(dptname:any){

    if(!this.tempArr.includes(dptname)){
      this.tempArr.push(dptname);
    }
    else{
      const index = this.tempArr.indexOf(dptname);
      if (index > -1) { 
        this.tempArr.splice(index, 1); 
      }
    }
  }


}
