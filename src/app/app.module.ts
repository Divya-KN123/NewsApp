import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechnewsComponent } from './technews/technews.component';
import { NewsApiService } from './Service/news-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeadlinesComponent, TechnewsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
