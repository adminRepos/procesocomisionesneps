import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private backendUrl: string = environment.apiUrl+'/api/v1/usuario-routes';

  constructor(
    private http:HttpClient
  ) { }

  public getUsuario(usuario: any): Observable<any>{
    return this.http.get(this.backendUrl + `/${usuario}`);
  }
}
