import { Component, OnInit, Injector, DoCheck, ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { FormControl } from "@angular/forms";
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
  Marker
} from "leaflet";
//import { usermarkerList } from "./markers";
import { ExerciseService } from 'src/app/@core/services/exercise.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { HTMLMarkerComponent } from './html-marker.component';
import { environment } from 'src/environments/environment';

interface MarkerMetaData {
  name: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<HTMLMarkerComponent>
}

@Component({
  selector: "app-map-competence",
  templateUrl: "./map-competence.component.html",
  styleUrls: ["./map-competence.component.css"]
})
export class MapCompetenceComponent implements OnInit {
  map:any;
  markers: MarkerMetaData[] = [];
  private user:any;


  public  greenIcon = icon({
    iconUrl: 'https://www.idmworks.com/wp-content/themes/idmworks/images/easyblog_images/537/golang-250.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
});

  getIcon(data){
    return icon(data);
  }

  public streetMaps = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    
  
  

  

  options = {
    layers: [this.streetMaps],
    zoom: 15,
    center: latLng(1.6297586, -75.6055663)
  };


  constructor(
    private exerciseService: ExerciseService,
    private authService: AuthService,
  /*   private resolver: ComponentFactoryResolver, 
    private injector: Injector */
  ) {}

  onMapReady(map) {
    // obtener una referencia local al mapa como lo necesitamos más adelante
    this.map = map;
  }

/*   addMarker(exercises) {
    // simplemente iterar sobre la matriz de marcadores de nuestro servicio de datos
    // y agregarlos al mapa
    for(const entry of this.exerciseService.getMarkers()) {
      // instancia dinámicamente un HTMLMarkerComponent
      const factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);

      // Necesitamos pasar el inyector de dependencia.
      const component = factory.create(this.injector);

      // conecte las @Input () o variables planas (no tiene que ser estrictamente una @Input ())
      component.instance.data = entry;

      // necesitamos activar manualmente la detección de cambios en nuestro componente en memoria
      // S t. Su plantilla se sincroniza con los datos que pasamos.
      component.changeDetectorRef.detectChanges();


      // crear un nuevo marcador de Folleto en la posición dada
      let m = marker(entry.position);

      // pasar el HTML de nuestro componente dinámico
      const popupContent = component.location.nativeElement;

      // agregar funcionalidad emergente
      m.bindPopup(popupContent).openPopup();

      // finalmente agregar el marcador al mapa s.t. es visible
      m.addTo(this.map);

      // agregar un objeto de metadatos a una matriz local que nos ayude
      // realizar un seguimiento de los marcadores de instancias para eliminarlos / eliminarlos más tarde
      this.markers.push({
        name: entry.name,
        markerInstance: m,
        componentInstance: component
      });
    }
  }
 */

 /*  removeMarker(marker) {
    // eliminarlo de los meta objetos de matriz
    const idx = this.markers.indexOf(marker);
    this.markers.splice(idx, 1);

    // quitar el marcador del mapa
    marker.markerInstance.removeFrom(this.map);

    // destruir el componente para evitar fugas de memoria
    marker.componentInstance.destroy();
  } */

    // simular algún cambio que necesita
   // para activar actualizaciones en nuestros componentes dinámicos
  /* mutateMarkerData() {
    // esto provoca cambios que los componentes en los marcadores tienen que volver a representar
    this.exerciseService.changeMarkerData();
  } */

 /*  ngDoCheck() {
    // Este es un método de ciclo de vida de un componente angular que se invoca siempre que para
   // se activa nuestra detección de cambio de componente
    this.markers.forEach(entry => {
      entry.componentInstance.changeDetectorRef.detectChanges();
    })
  } */

  ngOnInit() {
    this.authService.userObservable$.subscribe(user => {
      this.user = user;
      this.exerciseService.getExercises(this.user.idUser).subscribe(exercises => {
        console.log(" LISTADO DE MARCADORES DE LOS EJERCICIOS")
          console.log(exercises);
          if(exercises){
            for (const ex of exercises) {
              let m = marker(
                [ex.latitude, ex.longitude], 
                  { 
                    icon: this.getIcon({
                    iconUrl: environment.api.geoprogram+'uploads/images/caca.png',
                    iconSize:     [35, 35], // size of the icon
                    iconAnchor:   [35, 35], // point of the icon which will correspond to marker's location
                  }
                )});

              let c = circle([ex.latitude, ex.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: ex.radius
              })

              m.addTo(this.map);
              c.addTo(this.map);
            }
          }
      })  
  })
  
  }
  
}
