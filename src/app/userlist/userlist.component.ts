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
  constructor(private router: Router,
            private userService: UserService) { 
    this.userService.getUserList(0)
      .then(res => this.userList = res);
  }

  ngOnInit() {
  }

  detail(user: User){
    this.userService.setUser(user);
    this.router.navigate(['/detail']);
  }

}
