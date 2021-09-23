import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LanguagesBtnComponent } from './components/languages-btn/languages-btn.component';
import { NewsletterIndexComponent } from './components/newsletter-index/newsletter-index.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IndexBackgroundImageComponent } from './components/index-background-image/index-background-image.component';
import { HomePageLoggedOffComponent } from './components/home-page-logged-off/home-page-logged-off.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguagesBtnComponent,
    NewsletterIndexComponent,
    IndexBackgroundImageComponent,
    HomePageLoggedOffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
