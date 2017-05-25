import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';
import { Car } from '../../car';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private carService: CarService,
    private router: Router
   ) { }
  cars: any;
  ngOnInit() {
    this.getCars();
  }
  getCars() {
     this.carService
        .getCars()
        .subscribe(cars => {
          this.cars = cars;
      } )
  }
  deleteCar(id) {
      this.carService
        .deleteCar(id)
        .subscribe(() => {
        this.getCars();
      } )
  }

}
