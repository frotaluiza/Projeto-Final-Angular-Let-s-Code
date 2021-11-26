import { Component, Input, ViewChild} from '@angular/core';
import { ElementRef } from '@angular/core';
import { ApiNetflixService } from 'src/app/Services/api-netflix.service';
import { ShowInformation } from 'src/app/Services/endpoints-results';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  id: number = 0;

  public show = false;
  loaderNetflix: boolean = true;

  movieData: ShowInformation = {
    cardImage: '',
    titleImage: '',
    backgroundImage: '',
    relevance: 0,
    year: 0,
    minAge: 0,
    time: 0,
    description: '',
    cast: [],
    genre: [],
    scenes: []
  };

  showModal(id: number) {
    this.show = true;
    this.id = id;

    this.ServiceService.getShow(this.id).subscribe(x => {
      this.movieData = x;
      this.loaderNetflix = false
    })
  }

  hideModal() {
    this.show = false;
  }
  @ViewChild('myModal') myModal: ElementRef | undefined;
  
  closeModal(event: any) {
    if(event.target.className === "modalc")
    this.show = false;
  }

  constructor(private ServiceService: ApiNetflixService) {}

}
