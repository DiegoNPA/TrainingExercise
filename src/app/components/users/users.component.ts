import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(users => {
      const hrs = 2;
      var now = new Date().getTime();
      var nowStr = JSON.stringify(now);
      var setUpTime = localStorage.getItem('setUpTime');
      if (setUpTime === null){
        localStorage.setItem('setupTime', nowStr);
        localStorage.setItem('users', JSON.stringify(users));
        this.users = users;
      }else{
        if((now - JSON.parse(setUpTime)) > hrs*60*60*1000){
          localStorage.clear()
          localStorage.setItem('setupTime', nowStr);
          localStorage.setItem('users', JSON.stringify(users));
          this.users = users;
        }
        else{
          this.users = JSON.parse(localStorage.getItem('users'));
        }
      }
    })

  }

}
