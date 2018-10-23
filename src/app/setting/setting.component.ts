import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
errorarr=[]
  userInputs = new FormGroup({
    url: new FormControl(''),
    username: new FormControl(''),
    bio: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userService: ArticlesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.updateUser({
      user: {
        email: this.userInputs.value.email,
        bio: this.userInputs.value.bio,
        image: this.userInputs.value.url,
        username: this.userInputs.value.username,
        password: this.userInputs.value.password
      }
    }).subscribe(data => console.log(data)
    ,
    err =>{
      const errors = err.error.errors;
      for(var key in errors){
        const msgs = errors[key];
        // cons
        if(errors.hasOwnProperty(key)){
          for(let i=0;i<msgs.length;i++){
            this.errorarr.push(`${key} : ${msgs[i]}`);
          }
        }
      }
      console.log(this.errorarr);
    }
    )
  }

  logoutClicked() {
    this.userService.logout();
  }

}
