import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray, ValidatorFn, AbstractControl } from '@angular/forms';

const validatePassword: ValidatorFn = (control: AbstractControl) : { [key : string]:  any } | null => {
  if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value)){
    return null;
  }
  return {
    invalidPassword: (control.value) + ' is not a valid password, valid password need at lest 1 uppercase, 1 lowercase and 1 number',
  };
};
const validateUsername: ValidatorFn = (control: AbstractControl) : { [key : string]:  any } | null => {
  if(/^.{8,}$/.test(control.value)){
    return null;
  }
  return {
    invalidUsername: (control.value) + ' is short than 8 character',
  };
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 

  profile = new FormGroup({
    name: new FormControl(null,[validateUsername]),
    password: new FormControl(null,[validatePassword]),
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
      let name = this.profile.get('name').value;
      let password = this.profile.get('password').value;
      if(name == "khangmeo" && password == "khangmeo"){
        location.href='/home'
      } else{
        alert('your name should is "khangmeo" and password too!')
      }
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
