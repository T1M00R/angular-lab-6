import { Component, OnInit } from '@angular/core';
import { StudentService } from './Services/student.service';  // imported student service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  // on init needed for on initiation event
  title = 'student-app';
  students:any = [];

  constructor(private service:StudentService){

  }

  // life cycle hook
  ngOnInit(): void {  // data comes back from this service
    this.service.GetStudentData().subscribe( (data)=>{
      this.students = data.students;
      console.log (this.students);
    } );
  }

}
