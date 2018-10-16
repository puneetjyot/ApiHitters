import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singlecomment',
  templateUrl: './singlecomment.component.html',
  styleUrls: ['./singlecomment.component.css']
})
export class SinglecommentComponent implements OnInit {

  @Input() comment:any

  constructor() { }

  ngOnInit() {
  }

}
