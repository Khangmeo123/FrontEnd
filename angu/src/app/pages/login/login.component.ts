import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 

  profile = new FormGroup({
    name: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  });

 get name(){
   return this.profile.get('name');
 }
 
 get password(){
   return this.profile.get('password');
 }

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.profile.valid) {
      alert('go to home page');
    }
    else {
      this.validateAllFields(this.profile);
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
