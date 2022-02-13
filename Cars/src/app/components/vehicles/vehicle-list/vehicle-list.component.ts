import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  form: FormGroup;
  suscription!: Subscription;
  vehicle!: Vehicle;
  idVehicle = 0;
  collection : string[] = [];
  p: number = 1;
  searchText: any
  constructor(public vehicleService: VehicleService,
              private formBuilder: FormBuilder) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`vehicle ${i}`);
    };
     this.form = this.formBuilder.group({
      id: 0,
      make!: [''],
      model!: [''],
      year!: [''],
      horsePower!: [''],
      price!: ['']
    })
   }

  ngOnInit(): void {
    this.vehicleService.GetCars();
  }

   ngOnDestroy(){
    this.suscription.unsubscribe();
  }
  carDetails() {
    if (this.idVehicle != 0) {
      this.details();
    }
  }

  details() {
    const vehicle: Vehicle = {
      id: this.form.get('id')?.value,
      make: this.form.get('make')?.value,
      model: this.form.get('model')?.value,
      year: this.form.get('year')?.value,
      horsepower:this.form.get('year')?.value,
      price: this.form.get('year')?.value,
      img_url: this.form.get('img_url')?.value
    };
  }

  selectedCar?: Vehicle;
  onSelect(vehicle: Vehicle): void {
    this.selectedCar = vehicle;
  }
}