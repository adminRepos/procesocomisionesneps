import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { VentasComponent } from './ventas/ventas.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { UserManagementComponent } from './admin-usuarios/user-management/user-management.component';
import { PermissionManagementComponent } from './admin-usuarios/permission-management/permission-management.component';
import { HistoryComponent } from './admin-usuarios/history/history.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChartModule } from 'angular-highcharts';
import { UploadComponent } from './carga-masiva/upload/upload.component';
import { SystemSettingsComponent } from './configuracion/system-settings/system-settings.component';
import { MetapacSettingsComponent } from './configuracion/metapac-settings/metapac-settings.component';
import { NometapacSettingsComponent } from './configuracion/nometapac-settings/nometapac-settings.component';
import { MinpacSettingsComponent } from './configuracion/minpac-settings/minpac-settings.component';
import { NominpacSettingsComponent } from './configuracion/nominpac-settings/nominpac-settings.component';
import { DirSettingsComponent } from './configuracion/dir-settings/dir-settings.component';
import { EjeSettingsComponent } from './configuracion/eje-settings/eje-settings.component';
import { HistorySettingsComponent } from './configuracion/history-settings/history-settings.component';

const material = [
  MatFormFieldModule
];

@NgModule({
  declarations: [
    ArticulosComponent,
    VentasComponent,
    PagesComponent,
    HomeComponent,
    AdminUsuariosComponent,
    CargaMasivaComponent,
    ConfiguracionComponent,
    CorreccionComponent,
    IndicadoresProcesoComponent,
    LiquidacionComponent,
    PreliquidacionComponent,
    ReportesComponent,
    TableroControlComponent,
    VistaPreviaComponent,
    UserManagementComponent,
    PermissionManagementComponent,
    HistoryComponent,
    UploadComponent,
    SystemSettingsComponent,
    MetapacSettingsComponent,
    NometapacSettingsComponent,
    MinpacSettingsComponent,
    NominpacSettingsComponent,
    DirSettingsComponent,
    EjeSettingsComponent,
    HistorySettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    material,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartModule,
  ],
  exports: [
    ArticulosComponent,
    VentasComponent,
    HomeComponent,
    material
  ]
})
export class PagesModule { }
