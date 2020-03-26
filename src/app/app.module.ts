import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProductComponent } from './components/product/product.component';
// import { WelcomeComponent } from './components/home/welcome/welcome.component';
// import { SettingComponent } from './components/home/setting/setting.component';
// import { PcateComponent } from './components/product/pcate/pcate.component';
// import { PlistComponent } from './components/product/plist/plist.component';
// import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

import { MeisaiService } from './meisai.service';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

@NgModule({
   declarations: [
      AppComponent,
      //HomeComponent,
      //ProductComponent,
      //WelcomeComponent,
      //SettingComponent,
      //PcateComponent,
      //PlistComponent,
      //NewsComponent,
      LoginComponent,
      SearchComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      MeisaiService,
      SearchService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
