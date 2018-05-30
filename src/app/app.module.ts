import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    NavBarComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
