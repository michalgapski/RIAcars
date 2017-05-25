import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {
    cars= [];
    constructor(private _http: Http) { }
    checkMe: any;
    getCars() {
        return this._http.get('http://localhost/RIAcars/api/select.php')
            .map(res => {
                this.checkMe = res;

                if(this.checkMe._body !== '0') {
                    return res.json();
                }

            });
    }
    addCar(info) {
        return this._http.post('http://localhost/RIAcars/api/insert.php', info)
            .map(() => '');
    }
    getCar(id) {
        return this._http.post('http://localhost/RIAcars/api/selectone.php/',{'id': id})
            .map(res => res.json());
    }
    deleteCar(id) {
        return this._http.post('http://localhost/RIAcars/api/delete.php/',{'id': id})
            .map(() => this.getCars());
    }
    updateCar(info) {
        return this._http.post('http://localhost/RIAcars/api/update.php/', info)
            .map(() => '');
    }
}
