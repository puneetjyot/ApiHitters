import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ArticlesService} from '../articles.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-showarticle',
  templateUrl: './showarticle.component.html',
  styleUrls: ['./showarticle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ShowarticleComponent implements OnInit,OnChanges {

  @Input() feeds:string;
 


   displayData = null;
  constructor(private services:ArticlesService) { }

  ngOnInit() {
    
    this.services.getAllArticles()
   .subscribe(data=>{
     //@ts-ignore
     this.displayData=data.articles;
     console.log(this.displayData)
   });
  }
  ngOnChanges(changes: SimpleChanges) {

    this.feeds=changes.feeds.currentValue;
   console.log(this.feeds)
   if(this.feeds=="global"){
   this.services.getAllArticles()
   .subscribe(data=>{
     //@ts-ignore
     this.displayData=data.articles;
     console.log(this.displayData)
   })
  }
  else{
  this.services.getfeedArticle()
  .subscribe(data=>{
         //@ts-ignore

    this.displayData=data.articles;
    console.log(this.displayData)
  })
  }

}


}
