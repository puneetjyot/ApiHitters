import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any;
  constructor(
    private services:ArticlesService
  ) { }

  ngOnInit() {
    this.services.getYourProfile()
    .subscribe(data=>{
      console.log(data)
      //@ts-ignore
      this.profile=data.user;
    })
  }

}
