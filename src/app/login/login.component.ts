import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-login',
  providers: [ AuthenticationService ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
  isCollapsed = false;
  ngOnInit() {}

  credentials: TokenPayload = {
    username: '',
    password: ''
  };
  

  constructor(private auth: AuthenticationService, private router: Router) {}

 login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
    });
  }



}
