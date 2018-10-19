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
import { Home1Component } from './home1/home1.component';
import { UsernavComponent } from './usernav/usernav.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { FooterComponent } from './footer/footer.component';
import { WritecommentComponent } from './writecomment/writecomment.component';

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
  },
  {
    path:'home',component:Home1Component
  },
  {
    path:'setting',component:SettingComponent
  },
  {
    path:'createarticle',component:CreatearticleComponent
  },
  {
    path:'profile',component:ProfileComponent
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
    Home1Component,
    UsernavComponent,
    ProfileComponent,
    SettingComponent,
    CreatearticleComponent,
    FooterComponent,
    WritecommentComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,{onSameUrlNavigation: "reload"}, 
  
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
