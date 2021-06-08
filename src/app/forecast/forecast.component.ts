import { Component, OnInit } from '@angular/core';
import {ForecastServiceService} from "../forecast-service.service";
import {showUpStaggered} from "../animations/show-up.animation";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  animations: [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor(public forecastService: ForecastServiceService) { }

  ngOnInit(): void {
  }

}
