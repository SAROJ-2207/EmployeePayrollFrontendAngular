export class EmployeeModel {

    public firstName: string = "";
    public lastName: string = "";
    public address: string = "";
    public companyName: string = "";
    public salary: number= 0;
    public gender:string = "";
    public startDate: Date= new Date;
    public note:string = "";
    public profilePic:string = "";
    public department:string="";

    constructor(firstname: string,lastname: string,address:string,companyname:string,salary: number,gender:string,startDate: Date,note:string,profilePic:string,department:string){
        this.firstName=firstname;
        this.lastName=lastname;
        this.address=address;
        this.companyName=companyname;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
        this.note=note;
        this.profilePic=profilePic;
        this.department=department;
    }

}
