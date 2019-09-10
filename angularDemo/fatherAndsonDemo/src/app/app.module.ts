import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SystemSettingComponent } from './components/home/system-setting/system-setting.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { ProListComponent } from './components/product/pro-list/pro-list.component';
import { ProductcategoryComponent } from './components/product/productcategory/productcategory.component';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent ,
    children:[{
      path:'systemsetting',
      component: SystemSettingComponent} ,{
        path:'welcome',
      component: WelcomeComponent

      },{

        path:'**',
        redirectTo:'welcome'
      }
    ]
  },
 
  {
    path: 'product',
    component: ProductComponent,
    children:[{
      path:'productcategory',
      component: ProductcategoryComponent
    },{
      path:'prolist',
      component: ProListComponent
    },{

      path:'**',
      redirectTo:'productcategory'
    }]
    
  },
  {
    path:'',
    component:HomeComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SystemSettingComponent,
    WelcomeComponent,
    ProListComponent,
    ProductcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
