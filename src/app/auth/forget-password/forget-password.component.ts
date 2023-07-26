import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent implements OnInit{

  forgetPasswordForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]]
  });

  constructor(private fb:FormBuilder, private router:Router){};

  ngOnInit(){   
  }

  forgetPassword(){

  };

  loginBack(){
    this.router.navigate(['/login']);
  }
}
