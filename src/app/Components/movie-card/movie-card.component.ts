import { Component, Input, OnInit } from '@angular/core';
import { ApiNetflixService } from 'src/app/Services/api-netflix.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() id: number = 1;

  cardImage: string = "";

  constructor(private serviceService: ApiNetflixService) { }

  ngOnInit(): void {
    this.serviceService.getShow(this.id).subscribe(x =>{  
      this.cardImage = x.cardImage;    
    })
  }
}
