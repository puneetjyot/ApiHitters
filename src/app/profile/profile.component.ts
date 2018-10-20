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
  constructor(
    private services:ArticlesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.username = data[data.length - 1].path;
    console.log(this.username);
    
  }),
    this.services.getYourProfile()
    .subscribe(data=>{
      console.log(data)
      //@ts-ignore
      this.myprofile=data.user;
    }),
    this.services.getProfile(this.username)
    .subscribe(data=>{
            //@ts-ignore
      this.profile=data.profile;
      console.log(this.profile)
    }

    )
  }


}
