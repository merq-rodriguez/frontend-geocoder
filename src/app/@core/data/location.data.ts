import { Observable } from 'rxjs';

export interface ILocation{
  idLocation?: number;
  latitude: number;
  longitude: number;
}

export abstract class LocationData {
    abstract getLocations():   Observable<any[]>;
    abstract findLocation(idLocation: number):   Observable<any>;
    abstract createLocation(location: ILocation): Observable<any>;
    abstract updateLocation(location: ILocation): Observable<any>;
    abstract deleteLocation(idLocation: number): Observable<any>;
  }