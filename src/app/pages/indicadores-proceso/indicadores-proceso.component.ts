import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-indicadores-proceso',
  templateUrl: './indicadores-proceso.component.html',
  styleUrls: ['./indicadores-proceso.component.css']
})
export class IndicadoresProcesoComponent implements OnInit {

  INDICADOR: {[key: string]: string} = {
    'CONFIG':'0%',
    'CARGA':'25%',
    'PRE':'50%',
    'CORRECT':'75%',
    'LIQUIDATION':'100%'
  };

  progress = 'CONFIG'

  constructor(private commonService:CommonService){}

  ngOnInit(): void {
    let ID = sessionStorage.getItem('ID_USUARIO')??'';
    this.commonService.getPreliquidation(ID).subscribe((res)=>{
      this.progress = res.status;
    })
  }

}
