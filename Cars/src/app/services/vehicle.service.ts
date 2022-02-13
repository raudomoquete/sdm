import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  myAppUrl = 'https://private-anon-d9d1c89964-carsapi1.apiary-mock.com/cars';
  list!: Vehicle[];

  constructor(private http: HttpClient) { }

  GetCars() {
   this.http.get(this.myAppUrl).toPromise()
                .then(data => {
                  this.list = data as Vehicle[];
                });
  }
}