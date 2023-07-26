import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminUsuariosService } from 'src/app/services/admin-usuarios.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  ID:string = "";

  constructor(private toastr: ToastrService,private router:Router,private adminServices: AdminUsuariosService){}

  ngOnInit(): void {
    this.ID = sessionStorage.getItem('ID_USUARIO')??'';
  }

  gestionarUsarios(){
    this.router.navigate(['home/user-management']);
  }

  restartPreliquidation(){
    this.adminServices.restartPreliquidation(this.ID).subscribe({
        next: ()=>{
          this.toastr.success('Preliquidacion reiniciada exitosamente');
          this.router.navigate(['home/carga-masiva']);
        }
      }
    );
  }

  gestionarPermisos(){
    this.router.navigate(['home/permission-management']);
  }
  history(){
    this.router.navigate(['home/history']);
  }
}
