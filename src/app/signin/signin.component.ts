import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  authForm: FormGroup;
  errorarr=[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private services:ArticlesService,
    private router:Router
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;

    let credentials = this.authForm.value;
    
   if(credentials.username==undefined){
     console.log("yes")
     this.services.userLogin(credentials)
     .subscribe(data=>{
      console.log("POST Request is successful",data)
      //@ts-ignore
      window.localStorage.setItem("token",data.user.token)
      this.router.navigateByUrl('/home');
     },
     error=>{
      console.log(error.error.errors);
      const errors = error.error.errors;
      for(var key in errors){
        const msgs = errors[key];
        // cons
        if(errors.hasOwnProperty(key)){
          for(let i=0;i<msgs.length;i++){
            this.errorarr.push(`${key} : ${msgs[i]}`);
          }
        }
      }
      console.log(this.errorarr);
     }
     
     
     )
   }
   else{
     console.log("no")
     this.services.userRegistration(credentials)
     .subscribe(data=>{
      console.log("POST Request is successful",data)
      this.router.navigateByUrl('/login');
     },
     error=>{
      console.log("Error", error);
      const errors = error.error.errors;
      for(var key in errors){
        const msgs = errors[key];
        // cons
        if(errors.hasOwnProperty(key)){
          for(let i=0;i<msgs.length;i++){
            this.errorarr.push(`${key} : ${msgs[i]}`);
          }
        }
      }
      console.log(this.errorarr);
     }
     
     
     )
     

   }
    console.log(credentials);
    credentials.username=''
  }
}
