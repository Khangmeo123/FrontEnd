import { Component , OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {

  name: string;
  code: string;

}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

    ngOnInit(){}
  
  cities: City[];

  selectedCity: City;

  cars: SelectItem[];

  selectedCar1: string;

  selectedCar2: string = 'BMW';
  
  selectedCar3: string;

  groupedCars: SelectItemGroup[];

  items: SelectItem[];

  item: string;

  constructor() {
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];

      this.cars = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];

      this.groupedCars = [
          {
              label: 'Germany', value: 'germany.png', 
              items: [
                  {label: 'Audi', value: 'Audi'},
                  {label: 'BMW', value: 'BMW'},
                  {label: 'Mercedes', value: 'Mercedes'}
              ]
          },
          {
              label: 'USA', value: 'usa.png', 
              items: [
                  {label: 'Cadillac', value: 'Cadillac'},
                  {label: 'Ford', value: 'Ford'},
                  {label: 'GMC', value: 'GMC'}
              ]
          },
          {
              label: 'Japan', value: 'japan.png', 
              items: [
                  {label: 'Honda', value: 'Honda'},
                  {label: 'Mazda', value: 'Mazda'},
                  {label: 'Toyota', value: 'Toyota'}
              ]
          }
      ];

      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({label: 'Item ' + i, value: 'Item ' + i});
      }
  }
}
