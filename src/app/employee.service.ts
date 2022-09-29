import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './EmployeeModel';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    constructor(private http:HttpClient) {}

    insertEmployee(employee: any) {
        return this.http.post("http://localhost:8080/employee/create", employee);
    }

    getEmployee(){
        return this.http.get("http://localhost:8080/employee/getallemployees");
    }

    getEmployeeById(id:number) {
        return this.http.get("http://localhost:8080/employee/getbyid/"+id);
    }

    updateEmployeeById(employee:EmployeeModel,id:number) {
        return this.http.put("http://localhost:8080/employee/update/"+id,employee);
    }

    deleteEmployeeById(id:number): Observable<any> {
        return this.http.delete("http://localhost:8080/employee/delete/"+id);
    }
}