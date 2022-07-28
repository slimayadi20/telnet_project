import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    HomeComponent,
    ContentComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
