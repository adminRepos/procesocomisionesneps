import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioI } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    id_usuario: ['', Validators.required],
    password: ['', Validators.required]
  });

  perfil: any[] = [];

  loginBody = {
    id_usuario: this.loginForm.value.id_usuario,
    perfil: this.perfil
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr:ToastrService) { }

  ngOnInit() {

  }

  login(): void {
    console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe(
      {
        next: res => {
          sessionStorage.setItem('ID_USUARIO',res[0].id_usuario);
          console.log(res[0].id_usuario)
          this.createLogin(res)
          this.router.navigateByUrl('/home').then(
            () => {
              window.location.reload();
            }
          );},
        error: error => {
          this.toastr.error('Credenciales Invalidas')
          sessionStorage.removeItem('ID_USUARIO');
        }
      }
    )
  
  }

  createLogin(res: any){
    this.authService.save(res).subscribe(
    )
  }

  forgetPassword() {
    this.router.navigate(['/forget-password']);
  }

}
