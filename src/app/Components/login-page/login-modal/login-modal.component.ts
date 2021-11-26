import { ApiNetflixService } from 'src/app/Services/api-netflix.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  showInfo: boolean = false;
  loginForm: FormGroup = new FormGroup({
    emailOrPhone: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)])
  }, LoginModalComponent.customValidator)

  static customValidator(formGroup:AbstractControl) : {[key:string]:boolean} | null {
    const emailOrPhoneValue = formGroup.get('emailOrPhone')!.value
    const emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const myPhoneRegex = new RegExp("^([0-9])\\1{10}$");
    const onlyNumbersRegex = new RegExp('^[0-9]*$')
    let errors = null

    if(!emailRegex.test(emailOrPhoneValue) && !onlyNumbersRegex.test(emailOrPhoneValue)){
      errors = {errorEmailOrPhone: true}
      console.log(formGroup)
      return errors
    }
    
    if(myPhoneRegex.test(emailOrPhoneValue) || emailOrPhoneValue.length != 11 && onlyNumbersRegex.test(emailOrPhoneValue)){
      errors = {errorEmailOrPhone: true}
      return errors
    }
    return errors
  }

  showsInfo(){
    this.showInfo=true;
  }

  constructor(private api: ApiNetflixService, private route: Router) { }

  

  ngOnInit(): void {}

  sendFormLogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return
    }

    let userEmailOrPhone = this.loginForm.get('emailOrPhone')!.value
    let userPassword = this.loginForm.get('password')!.value
    this.api.postLoginNetflix(userEmailOrPhone, userPassword).subscribe( result =>{
      localStorage.setItem('token', result.token)
      this.route.navigate(['user-selection'])
    })
  }

  emailOrPhoneIsValid(): boolean {
    return this.loginForm.hasError('errorEmailOrPhone') && this.loginForm.controls['emailOrPhone'].touched
  }

  passwordIsValid(): boolean | null {
    return this.loginForm.controls['password'].errors && this.loginForm.controls['password'].touched
  }


}
