import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-articlebody',
  templateUrl: './articlebody.component.html',
  styleUrls: ['./articlebody.component.css']
})
export class ArticlebodyComponent implements OnInit {
 
  @Input() article:any;


  constructor() { }

  ngOnInit() {
  }

}
