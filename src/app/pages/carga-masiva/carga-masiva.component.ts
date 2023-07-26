import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CargaMasivaService } from 'src/app/services/carga-masiva.service';
import { FileStorageService } from 'src/app/services/file-storage.service';


@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent  implements OnInit {

  //codigo ajustes
  uploaded:{ [key: string]: string[]}  = {};
  isGeneratingPreliquidation : boolean = false;

  fileTypes: any[] = [];
  carga: any[] = [];
  files:{ [key: string]: File[]}  = {};
  isPreliquidationInProces: boolean = false;

  constructor(
    private commonService: CommonService,
    private cargaService: CargaMasivaService,
    private toastr: ToastrService,
    private router: Router,
    private fileStorageService :FileStorageService,
  ){}

  ngOnInit(): void {

      this.commonService.getPreliquidation(sessionStorage.getItem('ID_USUARIO')??'').subscribe((res)=>{
        this.isPreliquidationInProces = res.status == 'CARGA';
      })

      this.loadFileTypes();
      //codigo anterior al ajuste
      //this.loadCargaMasiva();
      this.fileStorageService.files$.subscribe((files) => {
        this.files = files;
      });
      //codigo ajustes
      this.fileStorageService.filesCharged$.subscribe((files)=>{
        this.uploaded = files;
      })

      this.fileStorageService.IsGeneratingPreliquidation$.subscribe((data)=>{
        if(!data){
          this.loadCargaMasiva();
        }
      })
  }

  loadFileTypes(): void {
    this.commonService.getLookupByType('archivo_carga').subscribe(
      fileTypes => {
        this.fileTypes = fileTypes;
      }
    )
  }

  loadCargaMasiva(): void {
    this.commonService.getCargaMasiva().subscribe({
      next: carga => {
        this.carga = carga;
      },
      complete:()=>{

        this.carga.forEach((foldername)=>{
          this.cargaService.getUploadedFiles(foldername['crga_nombre_archivo'].normalize('NFD').replace(/[\u0300-\u036f]/g, '')).subscribe(
            files =>
            this.fileStorageService.updateFilesChargedForKey(foldername['crga_nombre_archivo'],files)
          );
        })

      }
    }
    )
  }

  startProcessing(): void {



    /* const keys = Object.keys(this.files);

    if(keys.every(key => this.files[key].length == 0)){
      this.toastr.error('No existen archivos cargados');
      return
    }

    keys.forEach((key)=>{

      try{

        if(this.files[key].length > 0){

          for (let file of this.files[key]) {

            let ID = sessionStorage.getItem('ID_USUARIO');

            const formData = new FormData();

            formData.append('files', file, key.normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '}' + file.name.replace('.txt','') + '___' + ID + '.txt');

            this.cargaService.uploadFiles(formData).subscribe({
              next: res => {
                this.toastr.success(`${file.name} cargado exitosamente`);
                this.fileStorageService.updateFilesForKey(key, []);
              },
              error: error => {
                this.toastr.error('Error al cargar archivos');
              }
            });
          }

        }

      } catch (error){
        console.log(error);
      }

    }) */



    /* let cont = 0;

    for (const key in this.uploaded) {
      cont += this.uploaded[key].length;
    }

    console.log(cont)

    if(cont>0){
      this.carga = [];
      this.toastr.success('Archivos cargados, preliquidacion en proceso');
      this.fileStorageService.onGeneratingPreliquidation();
    }
    else{
      this.toastr.error('No existen archivos cargados');
    } */

    if(!this.carga.every(({crga_nombre_archivo})=>this.uploaded[crga_nombre_archivo].length>0)){
      this.toastr.error('No fue posible generar la preliquidación porque faltan arvhivos por subir');
      return
    }

    let ID:string = sessionStorage.getItem('ID_USUARIO')??'';

    this.cargaService.startProcess(ID).subscribe(
      {
        next: res => {
          this.toastr.success('Archivos cargados, preliquidacion en proceso');

          this.commonService.getPreliquidation(ID).subscribe((res)=>{
            this.isPreliquidationInProces = res.status == 'CARGA';
          })

        },
        error: error => {
          this.toastr.error('No fue posible generar la preliquidación revise los archivos cargados');
        }
      }
    )
  }

  uploadFiles(fileName: string): void {
    sessionStorage.setItem('fileName', fileName );
    this.router.navigate(['home/upload']);
  }
}
