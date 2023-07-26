import { FileStorageService } from './../../../services/file-storage.service';
import { Component, OnInit, ValueProvider } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CargaMasivaService } from 'src/app/services/carga-masiva.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  isLoading = false;
  fileName: any;
  uploaded: string[] = [];

  files: File[] = [];

  //dropzoneDisable:boolean = false;

  headers: {[key: string]: string} = {
    Afilxempresa: "NRO_FORMU|FECHA_GRAB_FUI|FECHA_RADIC_FUI|TID_BDUA|IDENTIFIC|APELLIDO1|APELLIDO2|NOMBRES|TIPOBEN|FECHA_AFILI|EMP_TID|EMP_IDENTIFIC|ASESOR",
    Afilxempresa2:"(Tid_BDUA + Identific )|Tid_BDUA|Identific|Emp_TID|Emp_Identific|Fecha_I_Laboral|Fecha_Fin_Laboral|Tip_cotiz",
    Radicación:'rad_tipoform|rad_fecharadi|rad_numerorad|rad_tid|rad_id|rad_asr_numautoriz|rad_fechagrab|fecha|rad_observaciones',
    FUI:'NUMERO_RADICACION|NUMERO_FUI|FECHA_GRABACION|TIPO_FUI|CODIGO|TIPO_AFIL|NUM_AFIL|TIPO_BEN|NUM_BEN',
    "Historicos (Aceptados 37 y 41)": "COD_EPS|TD_AFIL|NUM_AFIL|TIPO_COT|TIPO_AFIL|F_AFILIACION_EPS|ESTADO|AFL_ID",
    "Compesación Unificada Mes": "3_PER_COMP|4_TIP_IDE_COT|5_NUM_IDE_COT|6_TIP_IDE_APORT|7_NUM_IDE_APORT|10_DIAS_COMPEN|15_REGIS_COMPENSA",
    "ABX Unificado Mes": "3_PER_COMP|6_TIP_IDE_BEN|7_NUM_IDE_BEN|4_TIP_IDE_COT|5_NUM_IDE_COT|10_DIAS_COMPEN|15_REGIS_COMPENSA",
    "Historico IPS Afiliado": "IPAF_AFI_IDENTIFIC|IPAF_AFI_TID_CODIGO|IPAF_FECHMODI|IPAF_FUI_NUMERORAD|marca",
    "Cambios Documentos": "TIPO_DOC_OLD|NUMERO_DOC_OLD|TIPO_DOC_NEW|NUMERO_DOC_NEW",
    Reingresos: "TID|ID|Tid_Emple|Id_Emple|F_Ingreso|Asesor|Origen_Reingreso|ZONAL_Ase|Cargo",
    "Panel Empresarial": "NIT|F_Ingreso|F_Salida|Tipo_Empresa|Tipo_Empresa_Ant",
    Empleadores: "emp_tid_codigo|emp_identific|emp_digver|emp_nombre",
    "Estructura SAT Consolidado": "2_Transaccion|3_Numero_Radicacion|4_Fecha_Radicacion|14_Regimen_Vigente|15_Codigo_EPS_Actual|17_Codigo_EPS_a_Trasladar|19_Tipo_Afilaido|20_Tipo_Doc_SAT|21_num_doc_sat|48_Tipo_Cot|53_Fec_Inicio_Novedad",
    "Planta Total": "Regional|Zonal|Oficina|Clave_GC|Nombre_Gerente_Comercial|Clave_CC|Clave_Asesor|Tipo_Documento|Documento_Identidad|Nombre_Asesor_Comercial|Cargo|Regimen",
    "Tabla Asesores con Dependencia": "REGIONAL|OFICINA|OFICINA_BASE|NOMBRE_GERENTE_COMERCIAL|DOCUMENTO|CLAVE_CC|NOMBRE_COORDINADOR_COMERCIAL|DOCUMENTO_COORDINADOR|CARGO|NUMEROASESOR|CLAVE_ASESOR|TIPO_DOCUMENTO|DOCUMENTO_IDENTIDAD|NOMBRE_ASESOR_COMERCIAL|INICIO_RELACION|FINAL_RELACION",
    "Afiliaciones Cotizantes Precierre": "Tipodoc_Cotizante|Doc_Cotizante|Fecha_Radicacion|Fecha_Afiliacion|NroRadicado|NroFormulario|FechaRadicacionForm|Tipo_de_Fui|TipoDocEmplForm|DocEmplForm|Clave_Asesor|Tipo_Afiliado|Estado_Radicacion|TipoDoc_Empl|Doc_Empl|tid_ben|cod_ben",
    "Novedades Cotizantes Precierre": "Tipodoc_Cotizante|Doc_Cotizante|Fecha_Radicacion|Fecha_Afiliacion|NroRadicado|NroFormulario|FechaRadicacionForm|Tipo_de_Fui|TipoDocEmplForm|DocEmplForm|Clave_Asesor|Tipo_Afiliado|Estado_Radicacion|TipoDoc_Empl|Doc_Empl|tid_ben|cod_ben",
    R1: "COD_EPS|TD_AFIL_BDUA|NUM_AFIL_BDUA|COD_OTRA_EPS|F_AFILIACION_EPS|TD_NIT|NUM_NIT|FECHA_PROCESO",
    R5: "SERIAL|COD_EPS|TD_AFIL_BDUA|NUM_AFIL_BDUA|COD_OTRA_EPS|CODIGO|FECHA_PROCESO",
    Población: "DESCRIPCION_ID|PRIMER_APELLIDO|SEGUNDO_APELLIDO|NOMBRES|TIPO_ID|IDENTIFICACION |TIPO_DOC_OLD|NRO_DOC_OLD|TIPO_CODIGO_COTIZANTE |IDENTIFICACION_COTIZANTE |ESTADO_AFILIADO |FECHA_AFILIACION|COD_DANE |TIPO_COTIZANTE|TIPO_ID_EMPLEADOR|IDENTIFI_EMPLEADOR|FECHA_ING_LABORAL|FECHA_FIN_REL_LABORAL|ID_BDUA|FECHA_INI_VIG_BDUA|FECHA_RET_BDUA|FECHA_AFILIACION_BDUA|COD_ENTIDAD|AFILIADO_PAC|PRODUCTO_ADICIONAL|GRUP_FAM|TIPO_EMPRESA",
    "Cumplimiento PAC (Externos e Internos)": "Clave Asesor|Nombre Asesor Comercial|Oficina_Base|Canal|Prima | Pto Ingresos |% Cumplimiento",
    Producción: "RAD_TIPOFORM|TIPO_FORMULARIO|TIPO_AFILIADO|ESTADO_FORMULARIO|FECHA_PISTOLEO|NUMERO_FORMULARIO|RAD_NUMERORAD|TIPO_DOC_COTIZANTE_RADICACION|NUMERO_DOC_COTIZANTE_RADICACION|ESTADO_COTIZANTE|BENEFICIARIO_TID_CODIGO|BENEFICIARIO_IDENTIFIC|ESTADO_BENEF|PARENTESCO|EDAD|GRUPO_ETAREO|DEPTO_AFI|MUNICIPIO_AFI|REGIONAL_AFILIADO|FUI_FECHA_GRABACION|RAD_OBSERVACIONES|REGIONAL_ASESOR|ZONAL_ASESOR|CODIGO_ASESOR|NOMBRE_GERENTE|NOMBRE_COORDINADOR|NOMBRE_ASESOR|NIT_EMPLEADOR|NUEVO|COD_IPS|R5_APRO_NEG|REGIMEN|TIPO_DOC_FINAL|NUMERO_FINAL|TIPO_COTIZANTE|MES|FUENTE|ANO",
    "Correos Corredores": "Clave Asesor|Mail1|Mail2|Mail Lider Comercial",
    "Cierre Producción": "RAD_TIPOFORM|TIPO_FORMULARIO|TIPO_AFILIADO|ESTADO_FORMULARIO|FECHA_PISTOLEO|NUMERO_FORMULARIO|RAD_NUMERORAD|TIPO_DOC_COTIZANTE_RADICACION|NUMERO_DOC_COTIZANTE_RADICACION|ESTADO_COTIZANTE|BENEFICIARIO_TID_CODIGO|BENEFICIARIO_IDENTIFIC|ESTADO_BENEF|PARENTESCO|EDAD|GRUPO_ETAREO|DEPTO_AFI|MUNICIPIO_AFI|REGIONAL_AFILIADO|FUI_FECHA_GRABACION|RAD_OBSERVACIONES|REGIONAL_ASESOR|ZONAL_ASESOR|CODIGO_ASESOR|NOMBRE_GERENTE|NOMBRE_COORDINADOR|NOMBRE_ASESOR|NIT_EMPLEADOR|NUEVO|COD_IPS|R5_APRO_NEG|REGIMEN|TIPO_DOC_FINAL|NUMERO_FINAL|TIPO_COTIZANTE|MES|FUENTE|ANO",
  }

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient,
    private uploadService: CargaMasivaService,
    private fileStorageService :FileStorageService
  ) {
  }

  ngOnInit(): void {
    this.fileName = sessionStorage.getItem('fileName');

    this.fileStorageService.files$.subscribe((files) => {
      this.files = files[this.fileName] || [];
    });

    this.fileStorageService.filesCharged$.subscribe((files)=>{
      this.uploaded = files[this.fileName] || [];
    })

    //codigo anterior al ajuste
    this.getUploadedFiles(this.fileName);
  }

  upload(): void {
    sessionStorage.removeItem('fileName');
    this.router.navigate(['home/carga-masiva']);
  }

  onSending(): void {
    try{
      if(this.files.length < 1){
        this.toastr.error('No ha sido cargado ningún archivo');
      }

      //codigo de ajuste
      /* for(let file of this.files){
        this.fileStorageService.addFileCharged(this.fileName,file.name);
        console.log(this.uploaded)
      }
      if(this.files.length>0){
        this.toastr.success('Archivo(s) cargado(s) exitosamente');
        this.fileStorageService.updateFilesForKey(this.fileName, []);
      } */

      //codigo anterior al ajuste
      for (let file of this.files) {

        const meses = [
          "enero", "febrero", "marzo", "abril", "mayo", "junio",
          "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        const mesActual = new Date().getMonth();

        let ID = sessionStorage.getItem('ID_USUARIO');
        const formData = new FormData();
        //formData.append('files', file, this.fileName + '}' + file.name);
        formData.append('files', file, this.fileName.normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '}' + file.name.replace('.txt','') + '___' + meses[mesActual] + '___' + ID + '.txt');

        this.uploadService.uploadFiles(formData).subscribe({
          next: res => {
            this.toastr.success('Archivo(s) cargado(s) exitosamente');
            //codigo anterior al ajuste
            this.getUploadedFiles(this.fileName);
            this.fileStorageService.updateFilesForKey(this.fileName, []);
          },
          error: error => {
            this.toastr.error('No fue posible cargar el archivo');
          }
        });
      }
    } catch (error){
      console.log(error);
    }
  }

  onSelect(event: any) {

    const addeFiles = event.addedFiles;
    let filesNames: any[] = [];
    for (let file of addeFiles) {

      //this.dropzoneDisable = true;

      const fileName = file.name;
      for(let fileN of this.files){
        filesNames.push(fileN.name);
      }
      for(let fileN of this.uploaded){
        filesNames.push(`${fileN.split("___")[0]}.txt`);
      }

      console.log(filesNames)

      console.log(fileName)

      if(filesNames.length > 0 && filesNames.includes(fileName)) {
        throw this.toastr.error(`El archivo ${fileName} ya existe.`);
      }
      else if(file.type!="text/plain"){
        //this.dropzoneDisable = false;
        throw this.toastr.error(`El archivo ${fileName} tiene un formato incorrecto, por favor subir únicamente  extensiones .txt.`);
      }
      else {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          //this.dropzoneDisable = true;
          const content = e.target.result;
          const lines = content.split('\n');
          let headers = '';
          let data_colunmns: number[]=[];
          let cont = 0;
          for (let line of lines) {
            cont++;
            let test = ` en la linea ${cont}`
            if(headers == ''){
              headers=line;

              data_colunmns = headers.split('|').map((header,index)=>{
                if(header.replace(/\s/g, "").toUpperCase().includes('FECHA')){
                  return index;
                }
                else{
                  return -1;
                }
              }).filter(position => position !== -1);

              if(!this.headerChecker(line)){
                //this.dropzoneDisable = false;
                throw this.toastr.error(`El archivo ${fileName} no contiene cabecera o contiene una cabecera inválida para ${this.fileName}.`+test);
              }

            }
            else{

              let columnChecker = this.columnChecker(line,data_colunmns);

              if (!columnChecker.value) {
                switch(columnChecker.cause){
                  case 'MORE_COLUMNS':
                    //this.dropzoneDisable = false;
                    throw this.toastr.error(`El archivo ${fileName} contiene filas con más columnas que su cabecera.`+test);
                  case 'LESS_COLUMNS':
                    //this.dropzoneDisable = false;
                    throw this.toastr.error(`El archivo ${fileName} contiene filas con menos columnas que su cabecera.`+test);
                  case 'INCORRECT_DATA_FORMAT':
                    //this.dropzoneDisable = false;
                    throw this.toastr.error(`El archivo ${fileName} contiene filas con el formato de fecha erroneo.`+test);
                }
              }

            }
          }
          //this.files.push(file);
          this.fileStorageService.addFile(this.fileName,file);
          //this.dropzoneDisable = false;
        };
        reader.onerror = (event)=> {
          console.error("Error al leer el archivo: " + event.target?.error);
          //this.dropzoneDisable = false;
          throw this.toastr.error(`El archivo ${fileName} no puede leerse`);
        };
        reader.readAsText(file,'utf8');

      }
    }

  }

  headerChecker(line:string): boolean{
    if(!this.headers[this.fileName]) return false;
    if(line.replace(/\s/g, "").toUpperCase() != this.headers[this.fileName].replace(/\s/g, "").toUpperCase()){
      console.log(line.replace(/\s/g, "").toUpperCase());
      console.log(this.headers[this.fileName].replace(/\s/g, "").toUpperCase());
    }
    return line.replace(/\s/g, "").toUpperCase() == this.headers[this.fileName].replace(/\s/g, "").toUpperCase();

    //let headers: string[] = this.headers[this.fileName].split('|');
    //return headers.every(header=> line.replace(/\s/g, "").toUpperCase().includes(header)) && line.split('|').length == headers.length;

  }

  columnChecker(line:string, data_colunmns: number[]):{value:boolean,cause:string}{

    const CAUSE: string[] = ['MORE_COLUMNS','LESS_COLUMNS','INCORRECT_DATA_FORMAT','NONE_CAUSE'];

    let columns: string[] = line.split('|');

    let heder_length: number = this.headers[this.fileName].split('|').length;

    if(columns.length>heder_length){
      return {
        value: false,
        cause: CAUSE[0]
      }
    }
    else if(columns.length<heder_length){
      return {
        value: false,
        cause: CAUSE[1]
      }
    }
    else if(this.checkData(columns,data_colunmns)){
      return {
        value: false,
        cause: CAUSE[2]
      }
    }
    else{
      return {
        value: true,
        cause: CAUSE[3]
      };
    }

  }

  checkData(column: string[],data_colunmns: number[] ):boolean{
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    for(let i=0; i<data_colunmns.length; i++){
      if(!regex.test(column[data_colunmns[i]].replace(/\s/g, ""))){
        console.log("Error en columna número:",data_colunmns[i]+1);
        console.log("Valor del campo:",column[data_colunmns[i]].replace(/\s/g, ""));
        return true
      }
    }
    return false;
  }

  onRemove(event: any): void {
    const key = this.fileName;

    // Obtén el array de archivos actual del servicio
    const files = this.fileStorageService.getFilesForKey(key);

    // Encuentra el índice del archivo en el array
    const index = files.indexOf(event);

    if (index !== -1) {
      // Elimina el archivo del array
      files.splice(index, 1);

      // Actualiza el array de archivos en el servicio
      this.fileStorageService.updateFilesForKey(key, files);
    }
  }

  //codigo anterior al ajuste
  getUploadedFiles(foldername: any) {
    this.uploadService.getUploadedFiles(foldername.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).subscribe(
      files =>
      this.fileStorageService.updateFilesChargedForKey(this.fileName,files)
    );
  }

  deleteFiles(filename: any){

    //codigo de ajuste
    //this.fileStorageService.removeChargedFile(this.fileName,filename);

    //codigo anterior al ajuste
    let deleteFiles = {
      foldername: this.fileName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
      filename: filename
    }
    this.uploadService.deleteFile(deleteFiles).subscribe(
      {next: res => {
        this.toastr.success('Archivo eliminado');
        //codigo anterior al ajuste
        this.getUploadedFiles(this.fileName);
      },
      error: error => {
        this.toastr.error('Error al eliminar archivo');
      }}
    );
  }

}
