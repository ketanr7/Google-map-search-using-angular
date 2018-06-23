import { Component } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {HttpClient} from '@angular/common/http';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public dir = undefined;
  public lat: any;
  public lng: any;
  public zoom: Number = 14;
  goals = [0,0,0,0];
  showHide:boolean; 
  public show: boolean = true;
  public showPath: boolean = true;
  public showRemove: boolean = false;
  public waypoints:any=[];
     constructor() {
      this.showHide = false;           
      if (navigator)
        {
          navigator.geolocation.getCurrentPosition( pos => {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
          console.log(this.lng,this.lat);
        });
      }
    }

    ngOnInit() {setTimeout(() => {this.showHide = true}, 4000);
}
        autoCompleteCallback1(selectedData:any) {
      this.goals[0]=selectedData.data.geometry.location.lat;
      this.goals[1]=selectedData.data.geometry.location.lng;
    }

    autoCompleteCallback2(selectedData:any) {  
      this.goals[2]=selectedData.data.geometry.location.lat;
      this.goals[3]=selectedData.data.geometry.location.lng;
    }
    
    getDirection() {
     this.showPath = true;
      this.dir = {
                  origin: { lat: this.goals[0], lng:this.goals[1] },
                  destination: { lat: this.goals[2], lng: this.goals[3]}
    }
    this.showHide = false;
    this.show = false;
    this.showRemove=true;
        document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
    search(){
      this.showHide = true;
    } 
    mapClick(){
        this.showHide = false;
    }
    public renderOptions = {
        draggable: true
        
    }
    public change(event: any) {
        this.waypoints = event.request.waypoints;
    }
    
    public removeDirection(){
        this.showPath = false;
        this.showRemove=false;
    }

    openNav() {
        this.showHide = false;
        document.getElementById("mySidenav").style.width = "320px";
        document.getElementById("main").style.marginLeft = "320px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

}
