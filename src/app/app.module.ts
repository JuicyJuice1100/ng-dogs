import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DogService } from './dogService/dogService.service';

import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { DogsList } from './dogsList/dogsList.component';
import { Gallery } from './gallery/gallery.component';

import { BlueColor } from './blueColor/blueColor.directive';
import { HoverScale } from './hoverScale/hoverScale.directive';


@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    DogsList,
    Gallery,
    BlueColor,
    HoverScale
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
