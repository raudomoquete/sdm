import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { find } from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  form: FormGroup;

  constructor(
    public vehicleService: VehicleService,
    private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        year!: [''],
        horsepower!: [''],
        make!: [''],
        model!: [''],
        price!: ['']
      })
    }

  ngOnInit(): void {
    this.vehicleService.GetCars();
  }
}
