import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  icon,
  latLng,
  marker,
  polyline,
  tileLayer,
  point,
  Map,
  circle,
  polygon,
  LeafletMouseEvent,
  LatLng
} from "leaflet";
//import { usermarkerList } from "./markers";

export interface Coordinate {
  lat: number;
  lng: number;
  radius?: number;
}


@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  @Output() coordinateChange = new EventEmitter<any>();

  private coordinate: Coordinate = { lat: 1.6199338, lng: -75.605993, radius: 0 };

  circle = circle([46.95, -122], { radius: 5000 });
  markers = []

  private point = marker([this.coordinate.lat, this.coordinate.lng], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: "leaflet/marker-icon.png",
      shadowUrl: "leaflet/marker-shadow.png"
    })
  })

/*   route = polyline([[ 46.78465227596462,-121.74141269177198 ],
    [ 46.80047278292477, -121.73470708541572 ],
    [ 46.815471360459924, -121.72521826811135 ],
    [ 46.8360239546746, -121.7323131300509 ],
    [ 46.844306448474526, -121.73327445052564 ],
    [ 46.84979408048093, -121.74325201660395 ],
    [ 46.853193528950214, -121.74823296256363 ],
    [ 46.85322881676257, -121.74843915738165 ],
    [ 46.85119913890958, -121.7519719619304 ],
    [ 46.85103829018772, -121.7542376741767 ],
    [ 46.85101557523012, -121.75431755371392 ],
    [ 46.85140013694763, -121.75727385096252 ],
    [ 46.8525277543813, -121.75995212048292 ],
    [ 46.85290292836726, -121.76049157977104 ],
    [ 46.8528160918504, -121.76042997278273 ]]); */

  addMarker(latlng: LatLng = latLng(46.879966 + 0.1 * (Math.random() - 0.5), -121.726909 + 0.1 * (Math.random() - 0.5))) {
    const newMarker = marker(
      [ latlng.lat, latlng.lng ],
      {
        icon: icon({
          iconSize: [ 16, 16 ],
          iconAnchor: [ 8, 8 ],
          iconUrl: '2273e3d8ad9264b7daa5bdbf8e6b47f8.png',
          shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
        })
      }
    );
      this.markers.push(newMarker);
      this.markers = this.markers.slice();
  }

  /* onMapReady (map: Map) { 
    console.log("===============================================================");
    console.log(map);
    //this.coordinateChange.emit(this.coordinate); //Emitimos las coordenadas

    map.fitBounds (this.route.getBounds(), { 
      padding: point (24, 24), 
      maxZoom: 12, 
      animate: true 
    }); 
  }  */

  onMapReady(map: Map) { 
    map.on('click', (e : LeafletMouseEvent) => { 
      this.coordinateChange.emit(e.latlng); //Emitimos las coordenadas
    }); 
  } 
 

/*   public onclick(e) {
    this.coordinate = e.latlng; //Obtenemos las coordenadas
    this.coordinateChange.emit(this.coordinate); //Emitimos las coordenadas
    this.point = marker(e.latlng, {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "leaflet/marker-icon.png",
        shadowUrl: "leaflet/marker-shadow.png"
      })
    })
  }
 */


  public streetMaps = tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { detectRetina: true, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }
  );

  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  layers = [this.streetMaps];

   layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Mt. Rainier Point': this.point,
    }
  };


  options = {
    zoom: 16,
    center: latLng(1.6177422155380778, -75.60314588906364)
  };

  constructor() { }
  ngOnInit() {}
}
