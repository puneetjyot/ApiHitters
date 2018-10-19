import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private services:ArticlesService,
    private router:Router
  ) { 
    this.postForm = this.fb.group({
      'Title': ['', Validators.required],
      'Body': ['', Validators.required],
      'Subject': ['', Validators.required],
      'Tags': ['', Validators.required]
    });
  }

  ngOnInit() {
  }
   post(){
    let values = this.postForm.value;
    console.log(values);
    this.services.postArticle(values);
     this.router.navigateByUrl('/home');
  
  
  }
}
 
