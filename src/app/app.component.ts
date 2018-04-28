import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  providers: [ AuthenticationService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KSU Parking Enforcer Application';
  isCollapsed = false;
  constructor(public auth: AuthenticationService) {}

}
