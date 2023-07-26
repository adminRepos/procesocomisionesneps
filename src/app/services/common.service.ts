import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  private backEndUrl: string = environment.apiUrl+"/api/v1/common-routes";

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getLookupByType(type:string): Observable<any> {
    return this.httpClient.get<any>(this.backEndUrl + `/${type}`);
  }

  public getCargaMasiva(): Observable<any> {
    return this.httpClient.get<any>(this.backEndUrl);
  }

  public getPreliquidation(id_usuario:string): Observable<any> {
    return this.httpClient.get<string>(this.backEndUrl+`/preliquidation/${id_usuario}`);
  }
}
