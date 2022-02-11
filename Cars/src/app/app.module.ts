import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleListComponent } from './components/vehicles/vehicle-list/vehicle-list/vehicle-list.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehicleListComponent,
    FooterComponent,
    HeaderComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
