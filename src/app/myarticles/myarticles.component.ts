import { Component, OnInit, Input } from '@angular/core';
import {ArticlesService} from '../articles.service';


@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.css']
})
export class MyarticlesComponent implements OnInit {
  displaydata:any;
  @Input() profile:string;

  constructor(private services:ArticlesService) { }

  ngOnInit() {
    console.log(this.profile)
    this.services.getMyArticle(this.profile)
    .subscribe(data=>{
      //@ts-ignore
      this.displaydata=data.articles;
      console.log(this.displaydata)

    })
  }

}
