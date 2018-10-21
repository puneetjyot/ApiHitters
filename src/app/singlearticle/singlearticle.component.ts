import { Component, OnInit, Input } from '@angular/core';
import {ArticlesService} from '../articles.service';
import { Router } from '@angular/router';



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
  private services:ArticlesService,
  private router:Router
    )
     { }

  ngOnInit() {

   
    
    
  }
    favArticle(){
      if(window.localStorage.getItem("token")!=null){
      this.services.postFavCount(this.article.slug)
    }
    else{
      this.router.navigateByUrl('/register');

    }
  }
}
