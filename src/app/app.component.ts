import { Component, OnInit } from '@angular/core';
import {CurrentWeatherService} from "./current-weather.service";
import {ForecastServiceService} from "./forecast-service.service";
import {GeolocationService} from "./geolocation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'weather';

  constructor(public geolocationService: GeolocationService) {
  }

  ngOnInit(){
  }
}
