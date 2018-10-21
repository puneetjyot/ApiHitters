import { Component, OnInit, Input } from '@angular/core';
import {ArticlesService} from '../articles.service';


@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css']
})
export class SinglearticleComponent implements OnInit {

  @Input() article: any;

  
  displayData = null;

  constructor
  (
  private services:ArticlesService
    )
     { }

  ngOnInit() {

   
    
    
  }
    favArticle(){
      this.services.postFavCount(this.article.slug)
    }
}
