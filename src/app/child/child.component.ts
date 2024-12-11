import { Component,Input, Output, output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  @Input() pdata:any;
  @Output() eventObj = new EventEmitter()

  senData(val:any){
    // console.log(val);
    this.eventObj.emit(val);
  }
}
