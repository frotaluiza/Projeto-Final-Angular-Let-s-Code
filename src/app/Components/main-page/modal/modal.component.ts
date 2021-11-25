import { Component, Input, ViewChild} from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title = '';
  public show = false;

  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }
  @ViewChild('myModal') myModal: ElementRef | undefined;
  
  closeModal(event: any) {
    if(event.target.className === "modalc")
    this.show = false;
  }

}
