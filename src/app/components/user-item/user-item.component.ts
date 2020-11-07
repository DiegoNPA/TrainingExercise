import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onRedirect(user){
    this.router.navigateByUrl(`/users/${user.login}/repos`)
  }

}
