import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendUrl: string = environment.apiUrl+'/api/auth-routes';
  private loginUrl: string = '/login';
  private logoutUrl: string = '/logout';
  private saveUrl: string = '/saveLog';

  constructor(
    private http: HttpClient) {
  }

  public getPerfil(perfil:any): Observable<any>{
    return this.http.get(this.backendUrl + `/${perfil}`);
  }

  public login(accessData:any): Observable<any>{
    return this.http.post(this.backendUrl + this.loginUrl, accessData);
  }

  public save(accessData:any): Observable<any>{
    return this.http.post(this.backendUrl + this.saveUrl, accessData);
  }

  public logout(accessData: any): Observable<any>{
    return this.http.post(this.backendUrl + this.logoutUrl, accessData);
  }
}
