import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.css']
})
export class SystemSettingsComponent implements OnInit {

  fileTypes: any[] = [];
  carga: any[] = [];
  dependencias: any[] = [];
  perfiles:any[] = [];

  systemSettings = this.fb.group({
    cfgr_dias_proceso: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    cfgr_alerta_vencimiento: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    cfgr_presupuesto: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    cfgr_minimo_pac: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    cfgr_meta_pac: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    cfgr_inactividad_usuario: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  });

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
  ) { 
    this.loadCargaMasiva();
    this.loadDependencias();
    this.loadPerfiles();
  }


  ngOnInit(): void {
    this.loadCargaMasiva();
    this.loadDependencias();
    this.loadPerfiles();
  }

  settings(): void{

  }

  loadDependencias(): void {
    this.commonService.getLookupByType('dependencia').subscribe(
      dependencias => {
        this.dependencias = dependencias;
      }
    )
  }

  loadPerfiles(): void {
    this.commonService.getLookupByType('perfil').subscribe(
      perfiles => {
        this.perfiles = perfiles;
      }
    )
  }

  loadCargaMasiva(): void {
    this.commonService.getCargaMasiva().subscribe(
      carga => {
        this.carga = carga;
      }
    )
  }
}
