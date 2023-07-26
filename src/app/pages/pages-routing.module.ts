import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CorreccionComponent } from './correccion/correccion.component';
import { IndicadoresProcesoComponent } from './indicadores-proceso/indicadores-proceso.component';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { PreliquidacionComponent } from './preliquidacion/preliquidacion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TableroControlComponent } from './tablero-control/tablero-control.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './admin-usuarios/user-management/user-management.component';
import { PermissionManagementComponent } from './admin-usuarios/permission-management/permission-management.component';
import { HistoryComponent } from './admin-usuarios/history/history.component';
import { UploadComponent } from './carga-masiva/upload/upload.component';
import { DirSettingsComponent } from './configuracion/dir-settings/dir-settings.component';
import { EjeSettingsComponent } from './configuracion/eje-settings/eje-settings.component';
import { MetapacSettingsComponent } from './configuracion/metapac-settings/metapac-settings.component';
import { NometapacSettingsComponent } from './configuracion/nometapac-settings/nometapac-settings.component';
import { MinpacSettingsComponent } from './configuracion/minpac-settings/minpac-settings.component';
import { NominpacSettingsComponent } from './configuracion/nominpac-settings/nominpac-settings.component';
import { SystemSettingsComponent } from './configuracion/system-settings/system-settings.component';
import { HistorySettingsComponent } from './configuracion/history-settings/history-settings.component';

const routes:Routes = [
  {path:'home', component:PagesComponent,
    children:[
      {path:'', component:HomeComponent, data:{titulo:' Bienvenido '}},
      {path:'admin-usuarios', component:AdminUsuariosComponent, data:{titulo: 'Administración de Usuarios'}},
      {path:'user-management', component:UserManagementComponent, data:{titulo: 'Gestionar Usuario'}},
      {path:'permission-management', component:PermissionManagementComponent, data:{titulo: 'Gestionar Permisos'}},
      {path:'history', component:HistoryComponent, data:{titulo: 'Historial Usuarios'}},
      {path:'carga-masiva', component:CargaMasivaComponent, data:{titulo: 'Carga Masiva'}},
      {path:'upload', component:UploadComponent, data:{titulo: 'Cargar Archivos'}},

      {path:'configuracion', component:ConfiguracionComponent, data:{titulo: 'Configuración'}},
      {path:'metapac-settings', component:MetapacSettingsComponent, data:{titulo: 'Gestionar Canal Interno Meta PAC'}},
      {path:'nometapac-settings', component:NometapacSettingsComponent, data:{titulo: 'Gestionar Canal Interno Meta No Meta PAC'}},
      {path:'dir-settings', component:DirSettingsComponent, data:{titulo: 'Gestionar Directores'}},
      {path:'minpac-settings', component:MinpacSettingsComponent, data:{titulo: 'Gestionar Canal Externo Minimo PAC'}},
      {path:'nominpac-settings', component:NominpacSettingsComponent, data:{titulo: 'Gestionar Canal Externo No Minimo PAC'}},
      {path:'eje-settings', component:EjeSettingsComponent, data:{titulo: 'Gestionar Ejecutivos'}},
      
      {path:'system-settings', component:SystemSettingsComponent, data:{titulo: 'Sistema'}},
      {path:'history-settings', component:HistorySettingsComponent, data:{titulo: 'Historial'}},
      {path:'correccion', component:CorreccionComponent, data:{titulo: 'Corrección'}},
      {path:'indicadores-proceso', component:IndicadoresProcesoComponent, data:{titulo: 'Indicadores del Proceso'}},                                                                                                                                                                                        
      {path:'liquidacion', component:LiquidacionComponent, data:{titulo: 'Liquidación'}},
      {path:'preliquidacion', component:PreliquidacionComponent, data:{titulo: 'Preliquidación'}},
      {path:'reportes', component:ReportesComponent, data:{titulo: 'Reportes'}},
      {path:'tablero-control', component:TableroControlComponent, data:{titulo: 'Tablero de Control'}},
      {path:'vista-previa', component:VistaPreviaComponent, data:{titulo: 'Vista Previa y Muestreo'}}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
