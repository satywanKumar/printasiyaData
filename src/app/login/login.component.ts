import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    'userName':'printasiya',
    'password':''
  }

  isLoading:boolean = false;

  constructor(public mainService:MainServiceService,
              public router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.isLoading = true;
    this.mainService.login(this.data).subscribe(res=>{
      console.log(res.body)
      localStorage.setItem('token',res.body.token);
      this.router.navigate(['/dashboard']);
      this.isLoading = false
    },
    (err)=>{
      console.log(err);
      this.isLoading = false;
      swal("something is wrong","error");
    }
    )
    
  }

}
