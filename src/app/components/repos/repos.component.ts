import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Repo } from '../../models/Repo';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Repo[];

  constructor(private usersService:UsersService, private Route: ActivatedRoute) { }

  ngOnInit(): void {
    const userLogin = this.Route.snapshot.paramMap.get('userLogin');
    this.usersService.getRepos(userLogin).subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    })
  }

}
