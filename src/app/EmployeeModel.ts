

export class EmployeeModel {
    notes: string = "";
    startDate: Date;
    department :String[] = [];
    gender: String ="";
    name: String ="";
    profilePhoto: String ="";
    salary: number = 4000;
    constructor(notes: string, startDate: Date,department:String[],gender: string, name: string, profilePhoto: string,salary: number){
        this.notes = notes;
        this.startDate = startDate;
        this.department = department;
        this.gender = gender;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.salary = salary;
    }

}