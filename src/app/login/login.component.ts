import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata:any;
  constructor(private http:HttpClient, private router:Router){

  }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl(""),
      username:new FormControl(""),
      password:new FormControl("")
    })
  }

  login(data:any){
    this.http.post("https://localhost:7093/api/login", data).subscribe((result:any)=>{
      console.log(result);

      if(result.status == "success"){
        localStorage.setItem("token", result.token);
        this.router.navigate(["/users"]);
      }
      else{
        alert("Invalid credentials");
      }
    })
  }

}
