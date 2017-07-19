import { UserComment } from "../model/userComment";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import { User } from "../model/user";
import { UserCommentService } from "../service/user.comment.service";

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.css"]
})
export class UserdetailComponent implements OnInit {
  user: User;
  userComment = new UserComment;
  userCommentList: UserComment[];
  name: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private userCommentService: UserCommentService
  ) {
    this.user = this.userService.getUser();
    console.log(this.user);
    this.userService.getUserDetail(this.user.login).then(userDetail => {
      this.user = userDetail;
      this.userComment.id = userDetail.id;
      this.userComment.login = userDetail.login;
      this.userCommentService
        .getUserCommentListId(userDetail.id)
        .then(comments => (this.userCommentList = comments))
        .catch(error => {
          console.log(error);
          this.userCommentList = [];
        });
    }).catch(error =>{
      this.userComment.id = 1;
      this.userComment.login = 'mojombo';}
    );
  }

  ngOnInit() {}

  saveComment(){
    this.userCommentService.setSaveUserComment(this.userComment)
      .then(saved => {
        this.userCommentService.getUserCommentListId(this.user.id).then(
          list => {
            this.userCommentList = list;
            this.userComment.comment = '';
          }
        )
      })

  }
}
