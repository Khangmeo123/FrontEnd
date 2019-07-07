import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  yourChosen = new FormGroup({

    select: new FormControl(null,Validators.required),
    radio : new FormControl(null,Validators.required),
    date: new FormControl(null,Validators.required),
  });
  
  get select(){
    return this.yourChosen.get('select');
  }
  get radio(){
    return this.yourChosen.get('radio');
  }
  get date(){
    return this.yourChosen.get('date');
  }
 
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.yourChosen.valid) {
      
        alert('oke pass test');
      
    }
    else {
      this.validateAllFields(this.yourChosen);
    }
  }

  validateAllFields(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((field: string) => {
      const control = form.get(field);
      if (control instanceof FormArray) {
        this.validateAllFields(control);
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

}
