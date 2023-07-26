import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargaMasivaService {

  constructor(
    private http: HttpClient,
  ) { }

  private backendUrl: string = environment.apiUrl+'/api/v1/upload';
  private startProcessing: string = '/startProcessing';
  private getUploaded: string = '/uploaded/';
  private delete: string = '/delete';

  public uploadFiles(file: any): Observable<any> {
    return this.http.post(this.backendUrl, file);
  }

  public startProcess(ID:string): Observable<any> {
    return this.http.post(this.backendUrl + this.startProcessing,{ID});
  }

  public getUploadedFiles(foldername: any): Observable<any> {
    return this.http.get(this.backendUrl + this.getUploaded + `${foldername}`);
  }

  public deleteFile(deleteFile: any): Observable<any> {
    return this.http.post(this.backendUrl + this.delete, deleteFile);
  }
}
