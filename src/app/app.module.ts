import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './routes/search/search.component';
import { HomeComponent } from './routes/home/home.component';
import { UserComponent } from './routes/user/user.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, HomeComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
