import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:any;
  constructor(private http:HttpClient){}


  ngOnInit(): void {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + (localStorage.getItem("token") || "")
   });

    this.http.get("https://localhost:7093/api/users", { headers: reqHeader}).subscribe((result:any)=>{
    this.users = result;

    });
  }

}
