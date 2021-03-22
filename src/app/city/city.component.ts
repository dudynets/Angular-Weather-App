import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  weatherData;
  private city: string;
  private subscription: Subscription;
  loading = true;

  constructor(private weatherService: WeatherService, private activatedRoute:  ActivatedRoute, private router: Router) {
    this.subscription = activatedRoute.params.subscribe(params => this.city = params['city']);
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.city).subscribe(data => {
      this.weatherData = data;
    }, error => {
      console.error(error.message);
      this.router.navigate(['']);
    }, () => {
      this.loading = false;
    });
  }
}
