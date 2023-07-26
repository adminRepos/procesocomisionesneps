import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { dateFormatter } from 'src/app/util/date-format-util';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo?:string;
  public tituloSubs$:Subscription;
  public processDate: string = dateFormatter.getProcessDate();
 

  constructor(private router:Router){

    this.tituloSubs$ = this.getArgumentos().subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = `Nueva EPS  -  ${titulo}`;
    })

  }
  

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentos(){
    return this.router.events.pipe(
      filter((event:any) => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)
    )
  }
}
