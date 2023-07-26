import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuI } from '../models/menu';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  //Endpoint
  private backEndUrl: string = environment.apiUrl+"/api/v1/modulo-usuario/modulos"
  user: any = sessionStorage.getItem('ID_USUARIO');

  constructor(
    private httpClient: HttpClient
  ){}


  public getModulos(): Observable<any>{
    console.log(this.backEndUrl + `/${this.user}`);
    return this.httpClient.get<any>(this.backEndUrl + `/${this.user}`)
  }

  public getModulosByUser(user:any): Observable<any>{
    console.log(this.backEndUrl + `/${user}`);
    return this.httpClient.get<any>(this.backEndUrl + `/${user}`)
  }
}
