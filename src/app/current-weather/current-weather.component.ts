import {Component, Input, OnInit} from '@angular/core';
import {CurrentWeatherService} from "../current-weather.service";
import {Weather} from "../../structure/weather.structure";
import {showUp} from "../animations/show-up.animation";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.sass'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public weatherService: CurrentWeatherService) { }

  ngOnInit(): void {
  }

}
