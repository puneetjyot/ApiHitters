import { Component, OnInit } from '@angular/core';
import {ArticlesService } from '../articles.service'

@Component({
  selector: 'app-homearticles',
  templateUrl: './homearticles.component.html',
  styleUrls: ['./homearticles.component.css']
})
export class HomearticlesComponent implements OnInit {
tags:any;
  displaydata:object;
  constructor(private Services:ArticlesService) { }
  count:number=0;
  ngOnInit() {

    this.Services.getAllArticles(this.count)
    .subscribe(data=>{
      //@ts-ignore
      this.displaydata=data.articles;
    })
  this.Services.getTags()
  .subscribe((data:any)=>{
    this.tags=data.tags;
  })

  }
  filtertag(tag){
    this.Services.gettagArticles(tag)
    .subscribe((data:any)=>{
      this.displaydata=data.articles;
    })
  }

  onScroll(){
    this.count+=20
    if(this.count<=480){
    this.Services.getAllArticles(this.count)
    .subscribe(data=>{
      //@ts-ignore
      this.displaydata=[...this.displaydata,...data.articles];
    })
  }
}
}
