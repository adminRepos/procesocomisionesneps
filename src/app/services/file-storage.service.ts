import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  private filesSubject: BehaviorSubject<{ [key: string]: File[] }> = new BehaviorSubject<{ [key: string]: File[] }>({
    Afilxempresa: [],
    Afilxempresa2: [],
    Radicación: [],
    FUI: [],
    "Historicos (Aceptados 37 y 41)": [],
    "Compesación Unificada Mes": [],
    "ABX Unificado Mes": [],
    "Historico IPS Afiliado": [],
    "Cambios Documentos": [],
    Reingresos: [],
    "Panel Empresarial": [],
    Empleadores: [],
    "Estructura SAT Consolidado": [],
    "Planta Total": [],
    "Tabla Asesores con Dependencia": [],
    "Afiliaciones Cotizantes Precierre": [],
    "Novedades Cotizantes Precierre": [],
    R1: [],
    R5: [],
    Población: [],
    "Cumplimiento PAC (Externos e Internos)": [],
    Producción: [],
    "Correos Corredores": [],
    "Cierre Producción": [],
  });
  public files$: Observable<{ [key: string]: File[] }> = this.filesSubject.asObservable();


  private filesChargedSubject: BehaviorSubject<{ [key: string]: string[] }> = new BehaviorSubject<{ [key: string]: string[] }>({
    Afilxempresa: [],
    Afilxempresa2: [],
    Radicación: [],
    FUI: [],
    "Historicos (Aceptados 37 y 41)": [],
    "Compesación Unificada Mes": [],
    "ABX Unificado Mes": [],
    "Historico IPS Afiliado": [],
    "Cambios Documentos": [],
    Reingresos: [],
    "Panel Empresarial": [],
    Empleadores: [],
    "Estructura SAT Consolidado": [],
    "Planta Total": [],
    "Tabla Asesores con Dependencia": [],
    "Afiliaciones Cotizantes Precierre": [],
    "Novedades Cotizantes Precierre": [],
    R1: [],
    R5: [],
    Población: [],
    "Cumplimiento PAC (Externos e Internos)": [],
    Producción: [],
    "Correos Corredores": [],
    "Cierre Producción": [],
  });
  public filesCharged$: Observable<{ [key: string]: string[] }> = this.filesChargedSubject.asObservable();

  private IsGeneratingPreliquidationSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public IsGeneratingPreliquidation$: Observable<boolean> = this.IsGeneratingPreliquidationSubject.asObservable();

  constructor() {}

  onGeneratingPreliquidation(){
    this.IsGeneratingPreliquidationSubject.next(true);
  }

  addFileCharged(key: string, file: string): void {
    const files = { ...this.filesChargedSubject.value };
    if (!files[key]) return;
    files[key].push(file);
    this.filesChargedSubject.next(files);
  }

  getFilesChargedForKey(key: string): string[] {
    return this.filesChargedSubject.value[key] || [];
  }

  removeChargedFile(key: string, file: string): void {
    const files = { ...this.filesChargedSubject.value };
    if (!files[key]) return;

    const fileIndex = files[key].indexOf(file);
    if (fileIndex !== -1) {
      files[key].splice(fileIndex, 1);

      if (files[key].length === 0) {
        delete files[key];
      }

      this.filesChargedSubject.next(files);
    }
  }

  updateFilesChargedForKey(key: string, files: string[]): void {
    const filesCopy = { ...this.filesChargedSubject.value };
    filesCopy[key] = [...files];

    this.filesChargedSubject.next(filesCopy);
  }

  clearAllFileCharged(): void {
    const files = { ...this.filesChargedSubject.value };

    for (const key in files) {
        if (files.hasOwnProperty(key)) {
            files[key] = [];
        }
    }

    this.filesChargedSubject.next(files);
  }

  // Agregar archivo al almacenamiento
  addFile(key: string, file: File): void {
    const files = { ...this.filesSubject.value };
    if (!files[key]) return;
    files[key].push(file);
    this.filesSubject.next(files);
  }

  // Obtener archivos por clave
  getFilesForKey(key: string): File[] {
    return this.filesSubject.value[key] || [];
  }

  // Eliminar archivos por clave
  removeFile(key: string, file: File): void {
    const files = { ...this.filesSubject.value };
    if (!files[key]) return;

    const fileIndex = files[key].indexOf(file);
    if (fileIndex !== -1) {
      files[key].splice(fileIndex, 1);

      if (files[key].length === 0) {
        delete files[key];
      }

      this.filesSubject.next(files);
    }
  }

  //Actualiza la lista de files de una key especifica
  updateFilesForKey(key: string, files: File[]): void {
    const filesCopy = { ...this.filesSubject.value };
    filesCopy[key] = [...files];

    this.filesSubject.next(filesCopy);
  }

  //limpia todos los arrays del objeto
  clearAllFiles(): void {
    const files = { ...this.filesSubject.value };

    for (const key in files) {
        if (files.hasOwnProperty(key)) {
            files[key] = [];
        }
    }

    this.filesSubject.next(files);
  }

}
