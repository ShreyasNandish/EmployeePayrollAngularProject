import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private router:Router,private employeeService: EmployeeService){}
  public employeeDetails: any= [];

  ngOnInit(): void {
    this.getEmployee();
  }

  onAddUser= () => {
    this.router.navigateByUrl('/form');
  }

  getEmployee(){
    this.employeeService.getEmployee().subscribe((data:any) => {
      console.log("data=",data.data);
      this.employeeDetails = data.data;
    });
  }


  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe((data:any) => {
      this.ngOnInit();
    })
  }

  editEmployee(id: number) {
      this.router.navigate(['update',id]);
    }
}
