import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedComponent } from './feed/feed.component';
import { FormsModule } from '@angular/forms';
import { NewDirectiveDirective } from './new-directive.directive';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'feed', component: FeedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeedComponent,
    NewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
