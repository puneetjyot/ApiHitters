import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smartbar',
  templateUrl: './smartbar.component.html',
  styleUrls: ['./smartbar.component.css']
})
export class SmartbarComponent implements OnInit {
  @Input() article:any;

  constructor() { }

  ngOnInit() {
  }

}
