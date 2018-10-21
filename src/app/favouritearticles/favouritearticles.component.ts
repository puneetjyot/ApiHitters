import { Component, OnInit,Input } from '@angular/core';
import {ArticlesService} from '../articles.service'

@Component({
  selector: 'app-favouritearticles',
  templateUrl: './favouritearticles.component.html',
  styleUrls: ['./favouritearticles.component.css']
})
export class FavouritearticlesComponent implements OnInit {
  
  @Input() profile:string;
  displaydata:any;
  constructor(private services:ArticlesService) { }

  ngOnInit() {
    this.services.getFavouriteArticles(this.profile)
    .subscribe(data=>{
      //@ts-ignore
      this.displaydata=data.articles;
      console.log(data)

    })
  }

}
