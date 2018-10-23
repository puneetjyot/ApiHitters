import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-smartbar',
  templateUrl: './smartbar.component.html',
  styleUrls: ['./smartbar.component.css']
})
export class SmartbarComponent implements OnInit {
  @Input() article:any;
currentUser:any;
favCount:number;
isSame:boolean=false;
followed:boolean;
isRender:boolean=false;
profile:any;
isLogged:boolean;
  constructor(private services:ArticlesService,
    private router:Router
    ) { }

  ngOnInit() {
    if(window.localStorage.getItem("token")!=null){
this.isLogged=true;
    }
    if(this.isLogged){
    this.services.getYourProfile()
    .subscribe(data=>{
      this.currentUser=data
      console.log(this.currentUser)
      if(this.article.author.username==this.currentUser.user.username){
        this.isSame=true;
  
      }
      else{
        this.isSame=false;
      }
     
     
  
    })
  }
    
    this.services.getProfile(this.article.author.username,this.isLogged)
    .subscribe(data=>{
      
      //@ts-ignore
      this.profile=data.profile;
      this.isRender=true;
      this.followed=this.article.author.following;
    })

  }

  follow(){
    if(this.isLogged){
   this.services.followUser(this.article.author.username);
    this.followed=this.profile.following;
    }
    else{
      this.router.navigateByUrl("/register")
    }

  }
  unFollow(){
    this.services.UnfollowUser(this.article.author.username);

    this.followed=!this.profile.following;

  }

  handleFavorite(){
    if(this.isLogged){
    if(!this.article.favorited){
    this.services.favoriteArticles(this.article.slug)
    .subscribe(data=>{
      //@ts-ignore
      this.article=data.article;
    })
  }
  
  else{
    this.services.UnfavoriteArticles(this.article.slug)
    .subscribe(data=>{
      //@ts-ignore
      this.article=data.article;
    })

  }
  }

else{
  this.router.navigateByUrl("/register")
}
  }
  edit(){
    this.router.navigateByUrl(`createarticle/${this.article.slug}`);
  }
  delete(){
    this.services.deleteArticle(this.article.slug);
    this.router.navigateByUrl('/home')
  }

}
