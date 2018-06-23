import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';
import { Component} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    Ng4GeoautocompleteModule.forRoot(),
    AgmCoreModule.forRoot
      ({
          apiKey: 'AIzaSyAhF_2J3dR2wmDYL6posRwtgh3qQJDmQh4',
          libraries: ["places"]
       }),
    AgmDirectionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

