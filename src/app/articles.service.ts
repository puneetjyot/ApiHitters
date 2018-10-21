import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

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

interface Comment{
  comment:string;
}

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  BASE_URL=" https://conduit.productionready.io/api";
  constructor(private Http:HttpClient) { }

  getAllArticles(){
    return this.Http.get(`${this.BASE_URL}/articles`)
  }
  getArticle(slug:string){
    return this.Http.get(`${this.BASE_URL}/articles/${slug}`)
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

  getProfile(username:string){
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

  getMyArticle(username:string){
    return this.Http.get(`${this.BASE_URL}/articles?author=${username}`)
  }

  getFavouriteArticles(username:string){
    return this.Http.get(`${this.BASE_URL}/articles?favorited=${username}`)

  }

  postFavCount(slug:string){
    return this.Http.post(`${this.BASE_URL}/articles/${slug}/favorite`,
    {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Token ${window.localStorage.getItem("token")}`,
      }
    }
    )
    .subscribe(data=>{
      console.log("POST Request is successful",data)
     },
     error=>{
      console.log("Error", error);
     }
     
     
     )

  }

  userRegistration(credentials:Credentials){
    console.log(credentials.email)
   return this.Http.post(`${this.BASE_URL}/users`,
   {
    "user":{
      "username": "Jacobcddhcbbdcbdca",
      "email": "punadsbhsdhssxa@google.com",
      "password":"abcxssxssaassa"
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

  userLogin(credentials:Credentials){
    console.log(credentials.email)
   return this.Http.post(`${this.BASE_URL}/users/login`,
   {
    "user":{
      "email": "punadsbhsdhssxa@google.com",
      "password":"abcxssxssaassa"
    }
   })
   .subscribe(data=>{
    console.log("POST Request is successful",data)
    //@ts-ignore
    window.localStorage.setItem("token",data.user.token)

   },
   error=>{
    console.log("Error", error);
   }
   
   
   )
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
     .subscribe(data=>{
      console.log("POST Request is successful",data)
     
     
     },
     error=>{
      console.log("Error", error);
     }
     
     
     )  

  }


}
