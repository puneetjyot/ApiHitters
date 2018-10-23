import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {
slug:string;
  postForm: FormGroup;
  displaydata:any={
    Title:"",
    Subject:"",
    Body:"",
    Tags:""

  }
    constructor(
    private fb: FormBuilder,
    private services:ArticlesService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.postForm = this.fb.group({
      'Title': ['', Validators.required],
      'Body': ['', Validators.required],
      'Subject': ['', Validators.required],
      'Tags': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.slug = data[data.length - 1].path;
    console.log(this.slug)
  })
  if(this.slug!=""){
    this.services.getArticle(this.slug)
    .subscribe(data=>{
      console.log(data)
      //@ts-ignore
      this.displaydata.Title=data.article.title;
       //@ts-ignore
      this.displaydata.Subject=data.article.description;
       //@ts-ignore
      this.displaydata.Body=data.article.body;
      //@ts-ignore
      this.displaydata.Tags=data.article.tagList;


      this.postForm.setValue(this.displaydata);
    })
  }
}
   post(){
     if(this.slug=="createarticle"){
    let values = this.postForm.value;
    console.log(values+"jjkfjfvjfvj");
     this.services.postArticle(values);
     this.router.navigateByUrl('/home');
    }
  
  else{
    let values = this.postForm.value;
    console.log(values+this.slug);
     this.services.updateArticle(values,this.slug);
     this.router.navigateByUrl('/home');
  }
   }
  
  
}
 
