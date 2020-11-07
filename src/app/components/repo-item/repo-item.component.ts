import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../../models/Repo';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {

  @Input() repo: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
