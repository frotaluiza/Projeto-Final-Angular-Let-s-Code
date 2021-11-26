import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApiNetflixService } from 'src/app/Services/api-netflix.service';
import { ModalComponent } from '../main-page/modal/modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  @Input() id: number = 1;

  @ViewChild("myModal")
  modal: ModalComponent = new ModalComponent(this.serviceService);

  cardImage: string = "";

  constructor(private serviceService: ApiNetflixService) { }

  ngOnInit(): void {
    this.serviceService.getShow(this.id).subscribe(x =>{  
      this.cardImage = x.cardImage;    
    })
  }

  ShowMovieModal(){
    this.modal.showModal(this.id);
  }
}
