import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';
import { Car } from '../../car';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private carService: CarService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Car();
  addCar() {
      this.carService
        .addCar(this.model)
        .subscribe(() => this.goBack());
  }
   goBack() {
    this.router.navigate(['/home']);
  }
}
