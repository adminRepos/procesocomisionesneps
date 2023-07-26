import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  perfilTypes:any[] = [];

  constructor(
    private commonService:CommonService,
    private router:Router
  ) {   
  }

  ngOnInit():void{
    this.loadPerfilTypes();
  }

  routeSettings(action:any):void{
    let route = '';
    if (action == 'dir'){
      route = 'dir-settings';
    } else if(action == 'eje'){
      route = 'eje-settings';
    } else if(action == 'history'){
      route = 'history-settings';
    } else if(action == 'metapac'){
      route = 'metapac-settings';
    } else if(action == 'minpac'){
      route = 'minpac-settings';
    } else if(action == 'nometapac'){
      route = 'nometapac-settings';
    } else if(action == 'nominpac'){
      route = 'nominpac-settings';
    } else if(action == 'system'){
      route = 'system-settings'
    }

    this.router.navigate([`home/${route}`]).then(
      () => {
        window.location.reload();
      }
    );
  }

  loadPerfilTypes():void{
    this.commonService.getLookupByType('perfil').subscribe(
      perfilTypes => {
        this.perfilTypes = perfilTypes;
      }
    )
  }
}


