import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';



export interface Recipe
{
  name: string;
  likesCount: number;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private RecipeStub : Recipe = 
  {
    name: "SomeName",
    likesCount: 21
  };

  constructor( private http: HttpClient ) { }

  getForecast(): Observable<string> {
    //return this.http.get<object>('https://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=75c605720f058a5b8f807e00252375fc&units=metric');    

    return of("SomeThing");
  }

  getRecipes(): Observable<Recipe>
  {
    return of(this.RecipeStub);
  }
}
