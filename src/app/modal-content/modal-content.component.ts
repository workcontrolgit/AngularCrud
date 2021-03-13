import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {
  @Input() public user: any;
  //@Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.user);
  }

  passBack() {
    //this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }
}
