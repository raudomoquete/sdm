import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(public vehicleService: VehicleService) { }

  ngOnInit(): void {
      
  }
}