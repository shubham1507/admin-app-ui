import { Component, HostBinding } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})

export class LoginComponent {

  constructor(private authService: AuthService, private route: Router) {

  }

  @HostBinding('class') cAppClass = 'c-app flex-row align-items-center';

  onSubmit(f: NgForm) {
    this.authService.login(f.value).subscribe(data => {
      if (data)
        this.route.navigate(['dashboard'])
    })
  }

}
