import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-smartbar',
  templateUrl: './smartbar.component.html',
  styleUrls: ['./smartbar.component.css']
})
export class SmartbarComponent implements OnInit {
  @Input() article:any;
currentUser:any;
isSame:boolean=false;
  constructor(private services:ArticlesService) { }

  ngOnInit() {
    
    this.services.getYourProfile()
    .subscribe(data=>{
      this.currentUser=data
      console.log(this.currentUser)
      if(this.article.author.username==this.currentUser.user.username){
        this.isSame=true;
        console.log(this.isSame)
      }
      else{
        this.isSame=false;
      }
    })
  }



}
