import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './components/pages.component';
import { PortafolioPostComponent } from './components/portafolio/portafolio-post/portafolio-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPComponent } from './components/blog/blog-p/blog-p.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'portafolio', component: PortafolioPostComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: '**', component: PagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
