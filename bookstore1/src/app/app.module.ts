import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableUserComponent } from './table-user/table-user.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { BookListingComponent } from './book-listing/book-listing.component';
import { BookComponent } from './book/book.component';
import {BookService} from './book/book.service';

@NgModule({
  declarations: [
    AppComponent,
    TableUserComponent,
    HeaderAppComponent,
    BookListingComponent,
    BookComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
