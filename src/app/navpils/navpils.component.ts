import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navpils',
  templateUrl: './navpils.component.html',
  styleUrls: ['./navpils.component.css']
})
export class NavpilsComponent implements OnInit {
  @Output() loadmine=new EventEmitter()
  @Output() loadfavourite=new EventEmitter()
  articleType:string;
  constructor() { }

  ngOnInit() {
    
  }
  loadmyArticles(){

    this.articleType="mine";
    this.loadmine.emit(this.articleType);
  }
  loadfavoriteArticles(){
    this.articleType="favourite"
    this.loadfavourite.emit(this.articleType);
  }

}
