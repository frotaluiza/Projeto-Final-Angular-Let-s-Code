import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  erro: boolean = false;
  loginForm: FormGroup = new FormGroup({
    emailOrPhone: new FormControl(''),
    password: new FormControl('')
  }, LoginModalComponent.customValidator)

  static customValidator(formGroup:AbstractControl) : {[key:string]:boolean} | null {
    const emailOrPhoneValue = formGroup.get('emailOrPhone')!.value
    const passwordValue = formGroup.get('password')!.value

    const emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const phoneRegex = new RegExp('/^\d{10}$/');

    if(!emailRegex.test(emailOrPhoneValue)){
      
      return {errorEmailOrPhone: true}
      
    }
    return null

   
  }

  constructor() { }

  ngOnInit(): void {

  


  }

}
