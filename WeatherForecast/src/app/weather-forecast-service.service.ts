import { Injectable } from '@angular/core';
import { Forecast } from './home/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastServiceService {

  constructor() { }

  getForecast(): Forecast[] {
    return [new Forecast('Понедельник', 10)]
  }
}
