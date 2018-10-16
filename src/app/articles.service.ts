import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

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

  userLogin(credentials:object){
    console.log(credentials)
  }


}
