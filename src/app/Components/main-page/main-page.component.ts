import { Component, OnInit } from '@angular/core';
import { ApiNetflixService } from 'src/app/Services/api-netflix.service';
import { UserChosen } from 'src/app/Services/endpoints-results';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  userInfo: string = '';

  userData: UserChosen = {
    popular: [],
    keepWatching: []
  };

  constructor(private apiRequest: ApiNetflixService) {
  }

  ngOnInit(): void {
    
    this.userInfo = localStorage.getItem('id')!

    this.apiRequest.getUserChosen(this.userInfo).subscribe(x => 
      this.userData = x
    )
  }

}
