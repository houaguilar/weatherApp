import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../structure/weather.structure";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.sass']
})
export class WeatherCardComponent implements OnInit {

  // @ts-ignore
  @Input() weather: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}
