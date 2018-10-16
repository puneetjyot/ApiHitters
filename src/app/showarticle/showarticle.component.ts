import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service';

@Component({
  selector: 'app-showarticle',
  templateUrl: './showarticle.component.html',
  styleUrls: ['./showarticle.component.css']
})
export class ShowarticleComponent implements OnInit {

   displayData = null;
  constructor(private services:ArticlesService) { }

  ngOnInit() {
   
    this.services.getAllArticles()
    .subscribe(data=>{
      //@ts-ignore
      this.displayData=data.articles;
      console.log(this.displayData)
    })

  }


}
