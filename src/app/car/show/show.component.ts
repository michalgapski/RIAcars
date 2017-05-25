import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CarService } from '../../car.service';
import { Car } from '../../car';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getSingleCar();
  }
  car: Car;
  getSingleCar() {
    var id = this.route.snapshot.params['id'];
    this.carService
      .getCar(id)
      .subscribe(Car => {
          this.car = Car[0];
          });
  };

  goBack() {
    this.router.navigate(['/home']);
  }
}
