import { Component, Input, OnInit } from '@angular/core';
import { ApiNetflixService } from 'src/app/Services/api-netflix.service';
import { LoginUserInformation, UserChosen } from 'src/app/Services/endpoints-results';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @Input() userInfo: LoginUserInformation = {
    id: 0,
    name: '',
    avatarUrl: ''
  };

  userData: UserChosen = {
    popular: [],
    keepWatching: []
  };

  constructor(private apiRequest: ApiNetflixService) {
    apiRequest.getUserChosen(this.userInfo.id).subscribe(x => 
      this.userData = x  
    )
  }

  ngOnInit(): void {
  }

}
