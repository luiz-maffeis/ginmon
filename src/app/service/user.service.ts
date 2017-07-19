import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { User } from '../model/user';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private root = 'http://localhost:8080';
  private list = 'userList';
  private detail = 'userDetail';
  private user: User;

  constructor(private http: Http) { }

  getUserList(id: number): Promise<User[]> {
      const url = `${this.root}/${this.list}/${id}`;
      console.log(url);
      return this.http.get(url)
                .toPromise()
                .then(this.extractData )
                .catch(this.handleError);
  }

  getUserDetail(login: string): Promise<User> {
      const url = `${this.root}/${this.detail}/${login}`;
      return this.http.get(url)
                .toPromise()
                .then(this.extractData )
                .catch(this.handleError);
  }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    public setUser(user:User): void{
        this.user = user;
    }

    public getUser(): User{
        return this.user;
    }
    

}
