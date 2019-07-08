import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortafolioPostComponent } from './components/portafolio/portafolio-post/portafolio-post.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

import { DataBdService } from "./services/data-bd.service";
import { PagesComponent } from './components/pages.component';
import { BlogComponent } from './components/blog/blog.component';
import { BreadcromComponent } from './components/portafolio/breadcrom/breadcrom.component';
import { PortafolioComponent } from './components/portafolio/portafolio/portafolio.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BradcComponent } from './components/blog/bradc/bradc.component';
import { BlogPComponent } from './components/blog/blog-p/blog-p.component';
import { BreadComponent } from './components/blog-post/bread/bread.component';
import { ContentComponent } from './components/blog-post/content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectsComponent,
    PortafolioPostComponent,
    TeamComponent,
    NewsComponent,
    FooterComponent,
    ContactFormComponent,
    PagesComponent,
    BlogComponent,
    BreadcromComponent,
    PortafolioComponent,
    BlogPostComponent,
    BradcComponent,
    BlogPComponent,
    BreadComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [DataBdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
