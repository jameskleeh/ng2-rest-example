import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';

import { environment } from '../../environments/environment';
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  controllers: Array<any>;
  serverUrl: string;
  username: string;
  password: string;
  result: any;

  constructor(private navService: NavService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.serverUrl = environment.serverUrl;
    this.navService.getNavData().subscribe(applicationData => {
      this.controllers = applicationData.controllers.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }

  login() {
    this.authenticationService.login(this.username, this.password).subscribe((data: any) => {
      this.result = data;
    })
  }

  hasRoute(controllerName: string): boolean {
    return this.router.config.some((route: Route) => {
      if (route.path === controllerName) {
        return true;
      }
    });
  }
}
