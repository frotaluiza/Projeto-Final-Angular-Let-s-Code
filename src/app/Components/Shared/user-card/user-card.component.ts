import { Component, Input, OnInit } from '@angular/core';
import { LoginUserInformation } from 'src/app/Services/endpoints-results';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user?: LoginUserInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
