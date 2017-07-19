import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/toPromise";
import { UserComment } from "../model/userComment";
import { User } from "../model/user";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserCommentService {
  private root = "http://localhost:8080";
  private listId = "userCommentId";
  private listLogin = "userCommentLogin";
  private save = "saveUser";
  private user: User;
  private userComment: UserComment;
  private UserCommentList: UserComment[];

  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ "Content-Type": "application/json" });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getUserCommentListId(id: number): Promise<UserComment[]> {
    const url = `${this.root}/${this.listId}/${id}`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getUserCommentListLogin(login: string): Promise<UserComment[]> {
    const url = `${this.root}/${this.listLogin}/${login}`;
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  setSaveUserComment(userComment: UserComment): Promise<UserComment> {
    const url = `${this.root}/${this.save}`;
    return this.http
      .post(url, JSON.stringify(UserComment), this.options)
      .toPromise()
      .then(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
