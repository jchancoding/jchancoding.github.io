import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddpetComponent } from './addpet/addpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { ShowpetComponent } from './showpet/showpet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddpetComponent,
    EditpetComponent,
    ShowpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
