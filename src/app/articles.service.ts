import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

interface Credentials{
  email:string,
  password:string,
  username:string

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
  getYourArticle(){
    if(window.localStorage.getItem("token")!=null){
      console.log(window.localStorage.getItem("token"))
    return this.Http.get(`${this.BASE_URL}/articles`)
  }
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


}
