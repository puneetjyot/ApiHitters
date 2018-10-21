import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
myprofile:any;
username:string;
profile:any;
isLoggedIn:boolean;
feedTeller:string;
  constructor(
    private services:ArticlesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.username = data[data.length - 1].path;
    console.log(this.username);
    if(window.localStorage.getItem("token")!=null){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
    
  }),
    this.services.getYourProfile()
    .subscribe(data=>{
      //@ts-ignore
      this.myprofile=data.user.username;
      console.log(this.myprofile)

    }),
    this.services.getProfile(this.username)
    .subscribe(data=>{
            //@ts-ignore
      this.profile=data.profile;
      console.log(this.profile)
    }

    )
    
   
  }
  displayclick(feed){
    this.feedTeller=feed;
    console.log(feed)
  }


}
