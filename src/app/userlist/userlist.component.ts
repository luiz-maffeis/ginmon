import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList;
  lastUser;
  constructor(private router: Router,
            private userService: UserService) { 
    
  }

  ngOnInit() {
    this.userService.getUserList(0)
      .then(res => {
          this.userList = res;
          this.lastUser = res.length;
        })
      .catch(error => {
        console.log(error);
        this.userList = [];
      });
  }

  detail(user: User){
    this.userService.setUser(user);
    this.router.navigate(['/detail']);
  }

  moreUsers(){
    this.userService.getUserList(this.userList[this.lastUser - 1].id)
      .then(res => {
        this.userList = this.userList.concat(res);
        this.lastUser = this.userList.length;
      })
      .catch(error => {
        console.log(error);
        this.userList = [];
      });
  }

}
