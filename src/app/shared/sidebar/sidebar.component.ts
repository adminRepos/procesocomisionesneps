import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { MenuI } from 'src/app/models/menu';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  menuItems: any[] = [];
  perfil: any = '';

  constructor(
    private sideBarServices: SidebarService,
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService
    ) {
  }

  ngOnInit(): void {
    this.loadModules();
    const idUser = sessionStorage.getItem('ID_USUARIO');
    this.getPerfil(idUser);
  }

  loadModules() {
    this.sideBarServices.getModulos().subscribe(menuItems => {
      this.menuItems = menuItems;
    })
  }

  getPerfil(id_usuario: any){
    let perfil = '';
    this.usuarioService.getUsuario(id_usuario)
    .subscribe(
      user_id => {
        this.perfil = user_id[0].srio_perfil;
      }
    )
  }

  
  logout() {
    let user = {
      id_usuario: '',
      perfil: this.perfil
    }
    const idUser = sessionStorage.getItem('ID_USUARIO');
    user.id_usuario = idUser != null && idUser.length != 0? idUser: '';
    this.getPerfil(user.id_usuario);
    this.authService.logout(user).subscribe();
    sessionStorage.removeItem('ID_USUARIO');
    this.router.navigateByUrl('/login');
  }
}
