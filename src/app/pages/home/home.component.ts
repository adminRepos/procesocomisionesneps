import { Component } from '@angular/core';
import { dateFormatter } from 'src/app/util/date-format-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public processDate: string = dateFormatter.getProcessDate();
}
