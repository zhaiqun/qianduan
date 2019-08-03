import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ViewchildDemoComponent } from './componets/viewchild-demo/viewchild-demo.component';
import { ViewchilddemoComponent } from './components/viewchilddemo/viewchilddemo.component';
import { AslidDemoComponent } from './components/aslid-demo/aslid-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ViewchildDemoComponent,
    ViewchilddemoComponent,
    AslidDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
