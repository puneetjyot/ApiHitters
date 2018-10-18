import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  feedteller:string="your";

  constructor() { }

  ngOnInit() {
  }

  displayclick(feed){
    this.feedteller=feed;
    console.log(feed)
  }

}
