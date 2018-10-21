import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ArticlesService} from '../articles.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-showarticle',
  templateUrl: './showarticle.component.html',
  styleUrls: ['./showarticle.component.css'],

})
export class ShowarticleComponent implements OnInit {

 
 


   displayData = null;
  constructor(private services:ArticlesService) { }

  ngOnInit() {
    
    this.services.getfeedArticle()
   .subscribe(data=>{
     //@ts-ignore
     this.displayData=data.articles;
     console.log(this.displayData)
   });
  }
  
  


}
