import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.css']
})

export class PermissionManagementComponent  implements OnInit{
    modulos: any[] = [];
    modulosAsignados: any[] = [];
    user_id: any[] = [];
    id_usuario_searched: any = '';

    searchForm = this.fb.group({
      idUsuario: ''
    });

    permissionForm = this.fb.group({
      id_usuario: ['', Validators.required],
      modulo: ['', Validators.required],
      permisos: ['', Validators.required]
    });

    constructor(
      private commonService: CommonService,
      private usuarioService: UsuarioService,
      private sidebarService: SidebarService,
      private fb:FormBuilder,
      private toastr:ToastrService
    ){}

    ngOnInit():void{
      this.loadModules();
    }

    searchUsers():void{
      this.usuarioService.getUsuario(this.searchForm.value.idUsuario)
      .subscribe(
        user_id => {
          this.user_id = user_id;
          this.getAssignedModules(user_id[0].id_usuario);
        }
      )
    }

    loadModules():void{
      this.commonService.getLookupByType('modulo').subscribe(
        modulos => {
          this.modulos = modulos;
        }
      )
    }

    getAssignedModules(userId: any):void{
      this.sidebarService.getModulosByUser(userId)
      .subscribe(
        assignedModule => {
          console.log(assignedModule)
          this.modulosAsignados = assignedModule;
        } 
      )
    }

    emptyUser():boolean{
      if(this.user_id.length <= 0){
        return false;
      } else {
        return true;
      }
    }
}
