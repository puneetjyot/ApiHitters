import { Component, OnInit } from '@angular/core';
import {ArticlesService } from '../articles.service'

@Component({
  selector: 'app-homearticles',
  templateUrl: './homearticles.component.html',
  styleUrls: ['./homearticles.component.css']
})
export class HomearticlesComponent implements OnInit {

  displaydata:object;
  constructor(private Services:ArticlesService) { }

  ngOnInit() {

    this.Services.getAllArticles()
    .subscribe(data=>{
      //@ts-ignore
      this.displaydata=data.articles;
    })
  }

}
