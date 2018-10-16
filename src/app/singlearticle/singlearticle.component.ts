import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css']
})
export class SinglearticleComponent implements OnInit {

  @Input() article: any;

  
  displayData = null;

  constructor
  (
   
    )
     { }

  ngOnInit() {
    
  }

}
