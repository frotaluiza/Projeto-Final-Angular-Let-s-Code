import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNetflixService } from 'src/app/Services/api-netflix.service';
import { LoginUserInformation } from 'src/app/Services/endpoints-results';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  usersSelection: Array<LoginUserInformation> = [];

  constructor(private router: Router, private api: ApiNetflixService) { }

  ngOnInit(): void {
    this.usersSelection = this.api.listOfUsers
  }

  sendUserToMain(user: LoginUserInformation){
    console.log(user)
    this.router.navigate(['main'])
  }

}
