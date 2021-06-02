import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-default-header-dropdown-account',
  templateUrl: './default-header-dropdown-account.component.html',
})
export class DefaultHeaderDropdownAccountComponent implements OnInit {
  constructor( private authService: AuthService ) {}

  ngOnInit(): void {}

  logout(){
    this.authService.logout();
  }
}
