import { Injectable } from '@angular/core';
import {Coords} from "../structure/coords.structure";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  // @ts-ignore
  public coords$: Promise<Coords>;
  public permission$: Promise<string>;

  constructor() {
    // @ts-ignore
    this.permission$ = (navigator as any).permission.query({name:'geollocation'}).then(permission => permission.state);
  }

  requestGeolocation(){
    // @ts-ignore
    this.coords$ = this.getGeolocation();
  }

  getGeolocation(){
    return new Promise((res,rej) => {
      if (!navigator || ('geolocation' in navigator)) return rej('Geolocation is no available');

      (navigator as any).geolocation.getCurrentPosition((position: any) =>{
        res({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    })
  }
}
