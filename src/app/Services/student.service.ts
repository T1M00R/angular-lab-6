import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // add parameter to use below - httpclient object names http
  constructor(private http:HttpClient) { }

  // make request for data
  GetStudentData():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonBlob/969981176190353408");
  }
    


}
