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
import { RestApiComponent } from './rest-api/rest-api.component';
import { APIpostComponent } from './rest-api/apipost/apipost.component';
import { APIdeleteComponent } from './rest-api/apidelete/apidelete.component';
import { APIputComponent } from './rest-api/apiput/apiput.component';
import { ApigetComponent } from './rest-api/apiget/apiget.component';
import { RestApi2Component } from './rest-api2/rest-api2.component';
import { Apiget2Component } from './rest-api2/apiget2/apiget2.component';
import { Apiput2Component } from './rest-api2/apiput2/apiput2.component';
import { Apipost2Component } from './rest-api2/apipost2/apipost2.component';
import { Apidelete2Component } from './rest-api2/apidelete2/apidelete2.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'restAPI', component: RestApiComponent},
  { path: 'restAPI2', component: RestApi2Component}
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    NavBarComponent,
    CallbackComponent,
    RestApiComponent,
    APIpostComponent,
    APIdeleteComponent,
    APIputComponent,
    ApigetComponent,
    RestApi2Component,
    Apiget2Component,
    Apiput2Component,
    Apipost2Component,
    Apidelete2Component
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
