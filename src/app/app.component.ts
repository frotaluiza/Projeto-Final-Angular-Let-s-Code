import { Component } from '@angular/core';
import { UserChosen } from './Services/endpoints-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projeto-Final-Angular-Let-s-Code';

  userInfo: UserChosen = {
    "popular": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "keepWatching": [
      7,
      8
    ]
  }
}
