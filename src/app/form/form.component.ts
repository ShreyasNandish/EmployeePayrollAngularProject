import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel("",new Date,[],"","","",0);
  

  id: any = this.route.snapshot.paramMap.get("id");

  constructor(private router:Router, public service: EmployeeService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    
  }

  onAddUser= () => {
    this.router.navigateByUrl('/dashboard');
  }

  addEmployeeData() {
    console.log(this.employee);
   
    this.employee.department = this.getSelectedDepartments();
    this.service.insertEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["dashboard"])
    })
  }

  updateEmployee(){
    
    this.employee.department = this.getSelectedDepartments();
    this.service.updateEmployeeById(this.employee,this.id).subscribe((data:any) => {
      this.employee = data.data;
      this.router.navigate(["dashboard"])
    })
  }


  getSelectedDepartments() {
    let department = document.querySelectorAll(".checkbox");
    let selectedItems: any = [];
    department.forEach((item: any) => {
      if (item.checked) {
        selectedItems.push(item.value);
      }
    });
    return selectedItems;
  }


  displayDepartments(selectedItems: any) {
    let department = document.querySelectorAll(".checkbox");
    department.forEach((item: any) => {
      item.checked = false;
    });
    selectedItems.forEach((selectedItem: any) => {
      department.forEach((item: any) => {
        if (item.value == selectedItem) {
          item.checked = true;
        }
      });
    })
  } 
  }




