import { Component, OnInit, Input } from '@angular/core';
import {ArticlesService} from '../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlecomment',
  templateUrl: './singlecomment.component.html',
  styleUrls: ['./singlecomment.component.css']
})
export class SinglecommentComponent implements OnInit {
myprofile:any;
slug:string
isRender:boolean=false;
  @Input() comment:any

  constructor(
    private services:ArticlesService,
    private route:ActivatedRoute
  ) {
   }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.slug = data[data.length - 1].path;
    console.log(this.slug)
    });

    this.services.getYourProfile()
    .subscribe(data=>{
      //@ts-ignore
      this.myprofile=data.user;
      console.log(this.myprofile)
      this.isRender=true;
    })
   
  }
  
   deleteComment(){
    this.services.deleteComment(this.slug,this.comment.id);
    this.services.updateSubject();

    
    }
 

}
