import { Component, OnInit ,Input} from '@angular/core';
import {ArticlesService} from '../articles.service'
@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  currentUser:any;
 
  
  constructor(
    private services:ArticlesService
  ) { }

  ngOnInit() {
    this.services.getYourProfile()
    .subscribe(data=>{
      this.currentUser=data;
    }
      )
      console.log(this.currentUser.user.username)
  }

}
