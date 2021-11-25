import { Component, Input, OnInit } from '@angular/core';
import { UserChosen } from 'src/app/Services/endpoints-results';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @Input() userInfo: UserChosen = {
    popular: [],
    keepWatching: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
