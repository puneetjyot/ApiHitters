import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { NavtabsComponent } from './navtabs/navtabs.component';
import { HttpClientModule }    from '@angular/common/http';
import { ShowarticleComponent } from './showarticle/showarticle.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';
import { SigninComponent } from './signin/signin.component';
import {RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrameComponent } from './frame/frame.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticledescriptionComponent } from './articledescription/articledescription.component';
import { ArticlebannerComponent } from './articlebanner/articlebanner.component';
import { ArticlebodyComponent } from './articlebody/articlebody.component';
import { SmartbarComponent } from './smartbar/smartbar.component';
import { CommentComponent } from './comment/comment.component';
import { SinglecommentComponent } from './singlecomment/singlecomment.component';

const appRoutes : Routes = [
  {
    path:'', component:FrameComponent
  },
  {
    path:'login', component:SigninComponent
  },
  {
    path:'register',component:SigninComponent
  },
  {
    path:'article/:slug',component:ArticledescriptionComponent
  }
 
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    NavtabsComponent,
    ShowarticleComponent,
    SinglearticleComponent,
    SigninComponent,
    PageNotFoundComponent,
    FrameComponent,
    ArticledescriptionComponent,
    ArticlebannerComponent,
    ArticlebodyComponent,
    SmartbarComponent,
    CommentComponent,
    SinglecommentComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:false}
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
