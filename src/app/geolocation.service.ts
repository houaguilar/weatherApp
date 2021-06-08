import {Injectable} from '@angular/core';
import {Coords} from "../structure/coords.structure";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public coordsSubject: Subject<Coords> = new Subject<Coords>();
  // @ts-ignore
  public coords$: Observable<Coords> = this.coordsSubject.asObservable();
  public permission$: Promise<string>;
  public coordsPromise!: Promise<Coords>;

  constructor() {
    // @ts-ignore
    this.permission$ = (navigator as any).permissions.query({name: 'geolocation'}).then(permission => permission.state);
  }

  requestGeolocation() {
    if (!this.coordsPromise) {
      // @ts-ignore
      this.coordsPromise = this.getGeolocation()
    }
    this.coordsPromise.then(coords => {
      this.coordsSubject.next(coords);
    });
  }

  getGeolocation() {
    return new Promise((res, rej) => {
      if (!navigator || !('geolocation' in navigator)) return rej('Geolocation is no available');

      // @ts-ignore
      (navigator as any).geolocation.getCurrentPosition((position) => {
        res({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    })
  }
}
