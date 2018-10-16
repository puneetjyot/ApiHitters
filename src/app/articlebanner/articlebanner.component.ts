import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articlebanner',
  templateUrl: './articlebanner.component.html',
  styleUrls: ['./articlebanner.component.css']
})
export class ArticlebannerComponent implements OnInit {

@Input() article:any;

  constructor() { }

  ngOnInit() {
  }

}
