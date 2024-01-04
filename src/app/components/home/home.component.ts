import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private msgservice: MessageService){}

  logOut(){
    sessionStorage.clear();
    this.msgservice.add({ severity: 'warn', summary: 'Logout', detail: 'You are successfully Logout visit again!' });
    this.router.navigate(['/login']);
  }
}
