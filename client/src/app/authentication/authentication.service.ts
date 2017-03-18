import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, RequestMethod, Request, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<any> {
    const options = new RequestOptions();
    options.headers = new Headers({'Content-Type': 'application/json'});
    options.url = environment.serverUrl + 'api/login';
    options.body = JSON.stringify({username: username, password: password});
    options.method = RequestMethod.Post;
    return this.http.request(new Request(options)).map((r: Response) => r.json());
  }

}
