import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CarService } from '../../car.service';
import { Car } from '../../car';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
      this.getSingleCar();
  }

  //model:any={};
  model = new Car();
  id = this.route.snapshot.params['id'];
  getSingleCar(){
    
    this.carService
      .getCar(this.id)
      .subscribe(car => {
          this.model = car[0];
          });
  };
  
  updateCar() {
      this.carService
        .updateCar(this.model)
        .subscribe(() => this.goBack());
  }
 
   goBack() {
    this.router.navigate(['/home']);
  }
}
