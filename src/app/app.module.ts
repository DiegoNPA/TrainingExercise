import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ReposComponent } from './components/repos/repos.component';
import { RepoItemComponent } from './components/repo-item/repo-item.component';
import { NoReposComponent } from './components/no-repos/no-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    ReposComponent,
    RepoItemComponent,
    NoReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
