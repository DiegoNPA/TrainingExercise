import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-repos',
  templateUrl: './no-repos.component.html',
  styleUrls: ['./no-repos.component.css']
})
export class NoReposComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRedirect() {
    this.router.navigateByUrl(`/`)
  }

}
