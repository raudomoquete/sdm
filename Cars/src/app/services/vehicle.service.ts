import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  myAppUrl = 'https://private-anon-d9d1c89964-carsapi1.apiary-mock.com/cars';
  //'https://private-anon-d9d1c89964-carsapi1.apiary-mock.com/';
 // myApiUrl = 'api/cars';
  list!: Vehicle[];
  /* searchTerm: string = '';
  cars: Vehicle[] = [];
  allCars: Vehicle[] = []; */
  private updateForm = new BehaviorSubject<Vehicle>({} as any);

  constructor(private http: HttpClient) { }

  GetCars() {
   this.http.get(this.myAppUrl).toPromise()
                .then(data => {
                  this.list = data as Vehicle[];
                });
  }

/*   searchCars(): void {
    this.http.get<Vehicle[]>(this.myAppUrl)
    .subscribe((data: Vehicle[]) => {
      this.cars = data;
      this.allCars = this.cars;
    });
  }

  search(value: string): void {
    this.cars = this.allCars.filter((val) =>
    val.make.toLowerCase().includes(value));
  } */
  

 /*    return this.http.get<Vehicle[]>(`${this.myAppUrl}`).pipe(
      tap(x => x.length ?
        this.log(`found cars matching "${term}"`) :
        this.log(`no cars matching "${term}"`)),
        catchError(this.handleError<Vehicle[]>(`searchCars`, []))
    )
  }
  log(arg0: string) {
    throw new Error('Method not implemented.');
  }
  handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<Vehicle[]>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  } */

 /*  update(vehicle: any) {
    this.updateForm.next(vehicle);
  } */

/*   GetCars$(): Observable<Vehicle>{
    return this.updateForm.asObservable();
  } */


/* 
  findVehicle(): Observable<any> {
    const _url: string = this.myAppUrl + 'api/GetCars';
    return this.http.get(_url);
  } */
}