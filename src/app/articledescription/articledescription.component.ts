import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articledescription',
  templateUrl: './articledescription.component.html',
  styleUrls: ['./articledescription.component.css']
})
export class ArticledescriptionComponent implements OnInit {

  displaydata:any;
  slug:string='';
isLoggedIn:boolean;
isRender:boolean=false;
  constructor(
    private services:ArticlesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.slug = data[data.length - 1].path;
    console.log(this.slug)

    });

    this.services.getArticle(this.slug)
    .subscribe(data=>{
      //@ts-ignore
      this.displaydata=data.article;
      console.log(this.displaydata)
      this.isRender=true;
    }

    )
    if(window.localStorage.getItem("token")!=null){
    this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
  }

}
