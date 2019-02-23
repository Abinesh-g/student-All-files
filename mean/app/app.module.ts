import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { SubjectComponent } from './subject/subject.component';
import { MarkComponent } from './mark/mark.component';
import { SortlistComponent } from './sortlist/sortlist.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    InsertComponent,
    UpdateComponent,
    ViewComponent,
    SubjectComponent,
    MarkComponent,
    SortlistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }