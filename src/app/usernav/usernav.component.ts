import { Component, OnInit ,Input} from '@angular/core';
import {ArticlesService} from '../articles.service'
@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  currentUser:any;
 isRender:boolean=false;
  
  constructor(
    private services:ArticlesService
  ) { }

  ngOnInit() {
    this.services.getYourProfile()
    .subscribe(data=>{
      this.currentUser=data;
      this.isRender=true;
    }
    
      )
   
    }

}
