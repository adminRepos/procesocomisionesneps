import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminUsuariosService } from 'src/app/services/admin-usuarios.service';
import { CommonService } from 'src/app/services/common.service';
import { dateFormatter } from 'src/app/util/date-format-util';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {

  allUsers: any[] = [];
  usersToSearch: any[] = [];
  users: any[] = [];
  perfilTypes: any[] = [];
  user_id: any[] = [];
  modifyUser: any[] = [];
  isDisabled = true;

  userForm = this.fb.group({
    idUsuario: ['', Validators.required],
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    tipoDoc: ['', Validators.required],
    doc: ['', Validators.required],
    celular: ['', Validators.required],
    password: ['', Validators.required],
    perfil: ['', Validators.required]
  });

  userMForm = this.fb.group({
    id_usuario: ['', Validators.required],
    srio_nombre: ['', Validators.required],
    srio_correo: ['', Validators.required],
    srio_tipo_doc: ['', Validators.required],
    srio_numero_doc: ['', Validators.required],
    srio_numero_tel: ['', Validators.required],
    srio_password: ['', Validators.required],
    srio_perfil: ['', Validators.required]
  });

  searchForm = this.fb.group({
    idUsuario: ''
  });

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private adminUsuariosService: AdminUsuariosService,
    private route: Router,
    private usuarioService: UsuarioService,
    private toastr: ToastrService) {
    this.loadPerfilTypes();
  }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  onSubmit(): void {
    this.adminUsuariosService.createUser(this.userForm.value)
      .subscribe({
        next: res => {
          this.showSuccess();
          this.userForm.reset();
        },
        error: err => {
          this.toastr.error('No fue posible crear el usuario');
        }
      })
  }

  updateUser(): void {
    let id_usuario = this.userMForm.value.id_usuario;
    delete this.userMForm.value.id_usuario;
    if(this.userMForm.value.srio_password?.trim().length == 0){
      delete this.userMForm.value.srio_password;
    }
    console.log(this.userMForm);
    this.adminUsuariosService.updateUser(this.userMForm.value, id_usuario)
      .subscribe({
        next: res => {
          this.toastr.success('Usuario actualizado correctamente');
          this.userMForm.reset();
          this.searchForm.reset();
        },
        error: err => {
          this.toastr.error('No fue posible actualizar el usuario');
        }
      })
  }

  searchUsers(): void {
    if (this.allUsers.length > 0) {
      const user = this.allUsers.filter(
        obj => obj.id_usuario == this.searchForm.value.idUsuario
      )
      if (user.length > 0) {
        this.allUsers = user;
        this.searchForm.reset();
      } else {
        this.toastr.error('El usuario especificado no existe');
        this.allUsers = this.users;
      }
    } else {
      this.allUsers = this.users;
    }

  }

  searchToModify(): void {
    this.usersToSearch = this.allUsers;
    if (this.usersToSearch.length > 0) {
      const user = this.usersToSearch.filter(
        obj => obj.id_usuario == this.searchForm.value.idUsuario
      )
      console.log(user);
      if (user.length > 0) {
        this.modifyUser = user;
        this.setFormValues();
      } else {
        this.toastr.error('El usuario especificado no existe');
        this.modifyUser = [];
      }
    } else {
      this.modifyUser = [];
    }

  }

  setFormValues() {
    if (this.modifyUser.length > 0) {
      this.userMForm.setValue({
        id_usuario: this.modifyUser[0].id_usuario,
        srio_nombre: this.modifyUser[0].srio_nombre,
        srio_correo: this.modifyUser[0].srio_correo,
        srio_tipo_doc: this.modifyUser[0].srio_tipo_doc,
        srio_numero_doc: this.modifyUser[0].srio_numero_doc,
        srio_numero_tel: this.modifyUser[0].srio_numero_tel,
        srio_password: '',
        srio_perfil: this.modifyUser[0].srio_perfil
      });
    }
  }

  loadAllUsers(): void {
    this.adminUsuariosService.getAllUsers().subscribe(
      allUsers => {
        this.users = allUsers;
        this.allUsers = allUsers;
      }
    )
  }

  loadPerfilTypes(): void {
    this.commonService.getLookupByType('perfil').subscribe(
      perfilTypes => {
        this.perfilTypes = perfilTypes;
      }
    )
  }

  disableUser(id_usuario: any, estado: any): void {
    let state;

    if (estado == 'ACTIVO') {
      state = 'INACTIVO';
    } else {
      state = 'ACTIVO';
    }

    const user = {
      id_usuario: id_usuario,
      estado: state
    }
    this.adminUsuariosService.disableUser(user).subscribe(
      res => {
        this.toastr.success(`El usuario ${user.id_usuario} se cambió a estado ${user.estado}`);
        this.loadAllUsers();
      }
    )
  }

  formatDate(date: string): string {
    var d = new Date(date);
    date = dateFormatter.getStringDate(d);
    return date;
  }

  showSuccess() {
    this.toastr.success('Usuario creado correctamente');
  }
}
