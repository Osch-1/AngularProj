import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe, WeatherForecastService } from '../weather-forecast-service.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forecasts: string = "some string";

  recipe: Recipe | undefined;

  constructor(private weatherForecastServiceService: WeatherForecastService) {
  }

  ngOnInit(): void {
  }

  getForecast(): void {
    this.weatherForecastServiceService.getForecast().subscribe(data => this.forecasts = data);
  }

  getRecipe(): void {
    this.weatherForecastServiceService.getRecipes().subscribe(data => this.recipe = data);
  }
}
