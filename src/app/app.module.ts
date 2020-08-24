import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './routes/search/search.component';
import { HomeComponent } from './routes/home/home.component';
import { UserComponent } from './routes/user/user.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    UserComponent,
    SearchBarComponent,
    UserBlockComponent,
    NavComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
