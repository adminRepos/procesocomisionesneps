import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdminUsuariosService {

  private backEndUrl: string = environment.apiUrl+"/api/v1/admin-usuario";
  private postEndUrl: string = environment.apiUrl+"/api/v1/admin-usuario/create";
  private disableUserUrl: string = environment.apiUrl+"/api/v1/admin-usuario/disable";
  private updateUserU: string = environment.apiUrl+"/api/v1/admin-usuario/update";
  private updatePreliquidation: string = environment.apiUrl+"/api/v1/admin-usuario/update_preliquidation";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllUsers(): Observable<any>{
    return this.httpClient.get<any>(this.backEndUrl)
  }

  public createUser(user: any): Observable<any>{
    return this.httpClient.post<any>(this.postEndUrl, user)
  }

  public disableUser(user: any): Observable<any>{
    return this.httpClient.post<any>(this.disableUserUrl, user)
  }

  public updateUser(user: any, id_usuario:any): Observable<any>{
    return this.httpClient.put<any>(this.updateUserU + `/${id_usuario}`, user)
  }

  public restartPreliquidation(ID:string): Observable<any> {
    return this.httpClient.put<any>(this.updatePreliquidation,{ID});
  }

}
