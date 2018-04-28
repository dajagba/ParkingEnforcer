import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  providers: [ AuthenticationService ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})
export class RegisterComponent implements OnInit {
  ngOnInit() {
  }
    credentials: TokenPayload = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      studentID: null
      
    };  
  
    constructor(private auth: AuthenticationService, private router: Router) {}
  
    register() {
      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/dashboard');
      }, (err) => {
        console.error(err);
      });
 

  }
}