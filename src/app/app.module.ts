import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './routes/search/search.component';
import { HomeComponent } from './routes/home/home.component';
import { UserComponent } from './routes/user/user.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, HomeComponent, UserComponent, SearchBarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
