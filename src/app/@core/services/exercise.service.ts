import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of } from 'rxjs';
import { Api } from './api.service';

import { ExerciseData, IExercise } from '../data/exercise.data';
import { LatLngExpression } from 'leaflet';

export class Marker {
  id: number;
  name: String;
  description: String;
  position: LatLngExpression
}


@Injectable()
export class ExerciseService extends ExerciseData {
  markers: Marker[] = [
    {
      id: 1,
      name: 'Marker name 1',
      description: 'descr 1',
      position: [ 46.879966, -121.726909 ]
    },
    {
      id: 2,
      name: 'Marker name 2',
      description: 'descr 2',
      position: [ 46.000966, -123.726909 ]
    }
  ];
  constructor( private api: Api) {
    super();
  }

  private controller: string = "exercises"

 
  getMarkers() {
    return this.markers;
  }

  getMarkerById(id) {
    return this.markers.filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for(let marker of this.markers) {
      // just add a random number at the end
      marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

  getExercises(idUser: number): Observable<any> {
    return this.api.get(this.controller+'/getAll', idUser)
  }
  
  getExercisesFavorites(idUser: number): Observable<any> {
    return this.api.get(this.controller+'/getExerciseFavorite', idUser)
  }

  findExercise(idExercise: number): Observable<any> {
    return this.api.get(this.controller + '/findExercise', idExercise)
  }
  
  createExercise(exercise: IExercise): Observable<any> {
    const form = new FormData();
    if(exercise.image){
        form.append('image', exercise.image, exercise.image.name);
    }
    if(exercise.contentCode.trim() !== ''){
      form.append('contentCode', exercise.contentCode);
    }
    form.append('name', exercise.name);
    form.append('description', exercise.description);
    form.append('input', exercise.input);
    form.append('output', exercise.output);
    form.append('contentEditor', exercise.contentEditor);
    form.append('latitude', String(exercise.location.latitude));
    form.append('longitude', String(exercise.location.longitude));
    form.append('radius', String(exercise.radius));
    form.append('idUser', String(exercise.idUser));
    return this.api.post(this.controller, 'createExercise', form);
  }

  updateExercise(exercise: IExercise): Observable<any> {
    return this.api.post(this.controller, 'updateExercise', exercise)    
  }
  
  deleteExercise(idExercise: number): Observable<any> {
    return this.api.delete(this.controller, 'deleteExercise', idExercise);       
  }

  deleteFavoriteExercise(idExercise: number, idUser: number): Observable<any> {
    return this.api.post(this.controller, 'deleteFavoriteExercise', {idExercise, idUser});       
  }


}

