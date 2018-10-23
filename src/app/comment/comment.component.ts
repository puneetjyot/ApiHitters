import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  slug:string
  displaycomments:any;
  constructor(
    private services:ArticlesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.slug = data[data.length - 1].path;
    console.log(this.slug)
    });
    this.services.getComments(this.slug)
    .subscribe(data=>{
      //@ts-ignore
      this.displaycomments=data.comments;
      console.log("hi")
      console.log(this.displaycomments)
    }

    );

    this.services.getSubject()
    .subscribe((data:any)=>{
      this.services.getComments(this.slug)
      .subscribe(data=>{
        //@ts-ignore
        this.displaycomments=data.comments;
    })

  })
}


}
