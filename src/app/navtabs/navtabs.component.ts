import { Component, OnInit,Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  @Output() loadGlobal=new EventEmitter()
  @Output() loadYour=new EventEmitter()
  authType:string="";
  feed:string="global";
  isGlobal = false;
  loadGlobalFeed(){
    this.feed="global";
    this.isGlobal=true;
    console.log(this.isGlobal);
    this.loadGlobal.emit(this.feed)
 
  } 
  loadYourFeed(){
    this.feed="your";
    this.isGlobal=false;
    console.log(this.isGlobal);
    this.loadYour.emit(this.feed)
  }

  get feedType() {
    return this.isGlobal
  }




  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    if(window.localStorage.getItem("token")!=null){
      this.authType="home";
    }
    

}
}
