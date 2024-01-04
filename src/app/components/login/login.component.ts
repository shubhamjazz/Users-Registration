import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', Validators.required],

  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private MessageService: MessageService){}

  get email(){
    return this.loginForm.controls['email'];
  }
  get password(){
    return this.loginForm.controls['password'];
  }

  loginUser(){
    const {email, password} = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      res=>{
        if(res.length > 0 && res[0].password === password){
          sessionStorage.setItem('email', email as string);
          this.MessageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully' });
          this.router.navigate(['/home'])
      }else{
        this.MessageService.add({ severity: 'error', summary: 'Error', detail: 'Email or Password is wrong' });
      }
    },
    error =>{
      this.MessageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    } 
    )
  }
}
