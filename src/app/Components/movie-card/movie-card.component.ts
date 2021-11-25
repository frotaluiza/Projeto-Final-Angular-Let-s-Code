import { Component, Input, OnInit } from '@angular/core';
import { ShowInformation } from 'src/app/Services/endpoints-results';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() id: number = 1;

  cardImage: string = "";

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.ShowSeriesInfo(this.id).subscribe(x =>{  
      this.cardImage = x.cardImage;    
    })
  }
}
