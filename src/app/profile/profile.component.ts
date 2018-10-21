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
followed:boolean;
isRender:boolean=false;
  constructor(
    private services:ArticlesService,
    private route:ActivatedRoute
  ) {
    //this.followed=this.profile.following;

   }

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
    
  })

    if(this.isLoggedIn){
    this.services.getYourProfile()
    .subscribe(data=>{
      //@ts-ignore
      this.myprofile=data.user.username;
      console.log(this.myprofile)

    })
  }

    this.services.getProfile(this.username,this.isLoggedIn)
    
    .subscribe(data=>{
            //@ts-ignore
      this.profile=data.profile;
      console.log(this.profile)
      this.isRender=true;
      this.followed=this.profile.following;

    }

    )
    
    
  }
  displayclick(feed){
    this.feedTeller=feed;
    console.log(feed)
  }

  follow(){
    this.services.followUser(this.profile.username);
    this.followed=this.profile.following;

  }
  Unfollow(){
    this.services.UnfollowUser(this.profile.username);

    this.followed=!this.profile.following;
  }


}
