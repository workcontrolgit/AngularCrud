import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent implements OnInit {
  public user = {
    name: 'Izzat Nadiri',
    age: 26,
  };

  constructor(public modalService: NgbModal) {}

  ngOnInit() {}

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }
}
