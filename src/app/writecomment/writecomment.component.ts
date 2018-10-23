import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writecomment',
  templateUrl: './writecomment.component.html',
  styleUrls: ['./writecomment.component.css']
})
export class WritecommentComponent implements OnInit {
  postForm: FormGroup;
  @Input() article:any;
  slug:string;
  displaycomments:any;
  commentdata:any;
  constructor(
    private fb: FormBuilder,
    private services:ArticlesService,
    private router:Router
  ) {
    this.postForm = this.fb.group({
      'comment': ['', Validators.required]
     
    });
   }

  ngOnInit() {
    
  }

  postComment(){
    let values = this.postForm.value;
    console.log(values);
   
    this.services.postComment(values,this.article.slug)
    .subscribe((data:any)=>{
        this.commentdata=data.comment;
        this.services.updateSubject();

    })

   // this.router.navigate(["../ArticledescriptionComponent"])
  }
}
