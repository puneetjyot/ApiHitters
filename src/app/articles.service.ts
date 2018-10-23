import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Router } from '@angular/router';
import * as Rx from 'rxjs';

interface Credentials{
  email:string,
  password:string,
  username:string

}
interface ArticleValues{

  Title:string;
  Body:string;
  Subject:string;
  Tags:string;

}

const subject=new Rx.ReplaySubject(2,100);


interface Comment{
  comment:string;
}

@Injectable({
  providedIn: 'root'
})



export class ArticlesService {

  

  BASE_URL=" https://conduit.productionready.io/api";
  constructor(private Http:HttpClient,
    private router:Router) { }


    getSubject(){
      return subject;
    }

    updateSubject(){
      subject.next('');
    }

  getAllArticles(offset){
    if(window.localStorage.getItem("token")!=undefined){
    return this.Http.get(`${this.BASE_URL}/articles?offset=${offset}`,
    {
      headers:{
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    }
    )
  }
  else{
    return this.Http.get(`${this.BASE_URL}/articles?offset=${offset}`)

  }
}
  getArticle(slug:string){
    let IsLogged:boolean=window.localStorage.getItem("token")!=undefined
    if(IsLogged){
    return this.Http.get(`${this.BASE_URL}/articles/${slug}`,
    {
      headers:{
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    })
  }
  else{
    return this.Http.get(`${this.BASE_URL}/articles/${slug}`)
  }
}

  getComments(slug:string){
    console.log(slug)
    return this.Http.get(`${this.BASE_URL}/articles/${slug}/comments`)
  }
  getfeedArticle(){
    if(window.localStorage.getItem("token")!=null){
      console.log(window.localStorage.getItem("token"))
    return this.Http.get(`${this.BASE_URL}/articles/feed`,
    {
      headers:{
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    }
    )
  }

  

  }
  getYourProfile(){
    return this.Http.get(`${this.BASE_URL}/user`,
  {
    headers:{
      'Content-Type' : 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
      'Authorization': `Token ${window.localStorage.getItem("token")}`,
    }
  }
    )
  }

    
  getProfile(username:string,isLoggedIn:boolean){
    if(isLoggedIn){
    return this.Http.get(`${this.BASE_URL}/profiles/${username}`,
    
    {
      headers:{
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }

    }
    )
  }
  else{
    return this.Http.get(`${this.BASE_URL}/profiles/${username}`)
  }
  }

  getMyArticle(username:string){
    return this.Http.get(`${this.BASE_URL}/articles?author=${username}`)
  }

  getFavouriteArticles(username:string){
    return this.Http.get(`${this.BASE_URL}/articles?favorited=${username}`)

  }
  getTags(){
    return this.Http.get(`${this.BASE_URL}/tags`);
  }

  gettagArticles(tag){
    return this.Http.get(`${this.BASE_URL}/articles/?tag=${tag}`);
  }



  postFavCount(slug:string){
    return this.Http.post(`${this.BASE_URL}/articles/${slug}/favorite`,
    {},
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    }
    )
    

  }
  delFavCount(slug:string){
    return this.Http.delete(`${this.BASE_URL}/articles/${slug}/favorite`,
    
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    }
    )
  }

  userRegistration(credentials:Credentials){
    console.log(credentials.email)
   return this.Http.post(`${this.BASE_URL}/users`,
   {
    "user":{
      "username": credentials.username,
      "email": credentials.email,
      "password":credentials.password
    }
   })
  
  }

  userLogin(credentials:Credentials){
    console.log(credentials.email)
   return this.Http.post(`${this.BASE_URL}/users/login`,
   {
    "user":{
      "email": credentials.email,
      "password":credentials.password
    }
   })
  
  }

  postArticle(values:ArticleValues){

    if(window.localStorage.getItem("token")!=null){
    return this.Http.post(`${this.BASE_URL}/articles`,
    {
      "article": {
        "title": values.Title,
        "description": values.Subject,
        "body": values.Body,
        "tagList": ["reactjs", "angularjs", "dragons"]
      }

    },
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    })
    .subscribe(data=>{
      console.log("POST Request is successful",data)
     
     },
     error=>{
      console.log("Error", error);
     }
     
     
     )  
  }
  }
  updateArticle(values:ArticleValues,slug:string){

    if(window.localStorage.getItem("token")!=null){
    return this.Http.put(`${this.BASE_URL}/articles/${slug}`,
    {
      "article": {
        "title": values.Title,
        "description": values.Subject,
        "body": values.Body,
        "tagList": ["reactjs", "angularjs", "dragons"]
      }

    },
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    })
    .subscribe(data=>{
      console.log("PuT Request is successful",data)
     
     },
     error=>{
      console.log("Error", error);
     }
     
     
     )  
  }
  }

  deleteArticle(slug){
   
      return this.Http.delete(`${this.BASE_URL}/articles/${slug}`,
     
      {
        headers: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Token ${window.localStorage.getItem("token")}`,
        }
      })
      .subscribe(data=>{
        console.log("Delete Request is successful",data)
       
       },
       error=>{
        console.log("Error", error);
       }
       
       
       )  
    }
    
  
  

  postComment(values:Comment,slug:string){

    return this.Http.post(`${this.BASE_URL}/articles/${slug }/comments`,
    {
      "comment": {
        "body": values.comment
      }
    },
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }

     })
     
  }

  followUser(username:string){
    return this.Http.post(`${this.BASE_URL}/profiles/${username}/follow`,
    {},
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }

     })
     .subscribe(data=>{
      console.log("POST Request is successful",data)
     
     
     },
     error=>{
      console.log("Error", error);
     }
     
     
     )  
  }
  UnfollowUser(username:string){
    return this.Http.delete(`${this.BASE_URL}/profiles/${username}/follow`,
    
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }

     })
     .subscribe(data=>{
      console.log("POST Request is successful",data)
     
     
     },
     error=>{
      console.log("Error", error);
     }
     
     
     )  
  }

    deleteComment(slug:string,id:number){
      return this.Http.delete(`${this.BASE_URL}/articles/${slug}/comments/${id}`,
    
      {
        headers: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Token ${window.localStorage.getItem("token")}`,
        }
  
       })
       .subscribe(data=>{
        console.log("POST Request is successful",data)
        this.updateSubject();
       
       
       },
       error=>{
        console.log("Error", error);
       }
       
       
       )  

    }

    updateUser(user:object){
      return this.Http.put(`${this.BASE_URL}/user`,
      user,
      {
        headers: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Token ${window.localStorage.getItem("token")}`,
        }
      }

      )
    }

    logout(){
      this.router.navigateByUrl('/');
      window.localStorage.removeItem("token")

    }

    favoriteArticles(slug:string){
      return this.Http.post(`${this.BASE_URL}/articles/${slug}/favorite`,
      
      {},
      {
        headers: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Token ${window.localStorage.getItem("token")}`,
        }
      })
     
    }
    UnfavoriteArticles(slug:string){
      return this.Http.delete(`${this.BASE_URL}/articles/${slug}/favorite`,
      
    
      {
        headers: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Token ${window.localStorage.getItem("token")}`,
        }
      })
     
    }

  }
