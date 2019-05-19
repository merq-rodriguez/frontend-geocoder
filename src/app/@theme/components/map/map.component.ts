import { Component, OnInit } from "@angular/core";
import {
  icon,
  latLng,
  marker,
  polyline,
  tileLayer,
  point,
  Map,
  circle,
  polygon
} from "leaflet";
import { usermarkerList } from "./markers";
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
 


  public streetMaps = tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      detectRetina: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  layers = [
    circle([1.6197586, -75.6055663], { radius: 150 }),
    circle([1.6193453, -75.6052223], { radius: 250 }),
    circle([1.6193453, -75.6152223], { radius: 250 }),
    circle([1.6293453, -75.6252223], { radius: 100 }),
    circle([1.6293453, -75.6252223], { radius: 100 }),
    circle([1.6293453, -75.6252223], { radius: 100 }),
  ];
  //1.6197586,-75.6055663122
  options = {
    layers: [this.streetMaps, ...usermarkerList],
    zoom: 15,
    center: latLng(1.6297586, -75.6055663)
  };


  constructor(){}

  ngOnInit() {
    
  }
}
