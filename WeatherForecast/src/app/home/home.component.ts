import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherForecastServiceService } from '../weather-forecast-service.service';
import { Forecast } from './forecast';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forecasts: Forecast[] = [];

  baseForm = new FormGroup({
    name: new FormControl(''),
  });


  heroes: any = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor(private weatherForecastServiceService: WeatherForecastServiceService) {
  }

  ngOnInit(): void {
  }

  getForecast(): void {
    this.forecasts = this.weatherForecastServiceService.getForecast();    
  }
}
