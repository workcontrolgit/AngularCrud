import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Logger, UntilDestroy, untilDestroyed } from '@core';

import { ApiHttpService } from '@core/services/api-http.service';
import { ApiEndpointsService } from '@core/services/api-endpoints.service';
import { Position } from '@shared/models/position';
import { DataResponse } from '@shared/classes/data-response';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

const log = new Logger('Detail');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;

  version: string | null = environment.version;
  message = '';
  sub: any;
  id: any;
  entryForm: FormGroup;
  error: string | undefined;
  currentRecord: any;
  model: any = { position: {} };

  isAddNew: boolean = false;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
    };
    this.createForm();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.read(this.route.snapshot.paramMap.get('id'));
        this.message = 'Edit';
      } else {
        this.isAddNew = true;
        this.message = 'New';
      }
    });
    log.debug(this.id);
    if (this.id !== null) {
      //this.read(this.route.snapshot.paramMap.get('id'));
    }
    log.debug(this.model.position);
  }

  onSubmit() {
    //log.debug('onSubmit:' + JSON.stringify(this.entryForm));
    log.debug('onSubmit:', this.entryForm.value);
    log.debug('onSubmit:', this.entryForm.get('positionNumber').value);
  }

  onInsert() {
    log.debug('OnInsert: ', this.entryForm.value);
    log.debug('OnInsert: ', this.entryForm.get('positionNumber').value);
  }

  onUpdate() {
    log.debug('onUpdate: ', this.entryForm.value);
    log.debug('onUpdate: ', this.entryForm.get('positionNumber').value);
  }

  read(id: any): void {
    this.apiHttpService.get(this.apiEndpointsService.getPositionByIdEndpoint(id), id).subscribe(
      (resp: DataResponse) => {
        //Assign data to class-level model object.
        this.model.position = resp.data;
        //Populate reactive form controls with model object properties.
        this.entryForm.setValue({
          id: this.model.position.id,
          positionNumber: this.model.position.positionNumber,
          positionTitle: this.model.position.positionTitle,
          positionDescription: this.model.position.positionDescription,
          positionSalary: this.model.position.positionSalary,
        });
      },
      (error) => {
        log.debug(error);
      }
    );
  }

  delete(id: any): void {
    this.apiHttpService.delete(this.apiEndpointsService.deletePositionByIdEndpoint(id), id).subscribe(
      (resp: DataResponse) => {
        this.currentRecord = resp.data;
        log.debug(this.currentRecord);
        log.debug(resp);
      },
      (error) => {
        log.debug(error);
      }
    );
  }

  create(data: any): void {
    this.apiHttpService.post(this.apiEndpointsService.postPositionsPagedEndpoint(), data).subscribe((resp: any) => {
      this.id = resp.data; //guid return in data
    });
  }

  put(data: any): void {
    this.apiHttpService.post(this.apiEndpointsService.putPositionsPagedEndpoint(), data).subscribe((resp: any) => {
      this.id = resp.data; //guid return in data
    });
  }

  private createForm() {
    this.entryForm = this.formBuilder.group({
      id: [''],
      positionNumber: ['', Validators.required],
      positionTitle: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionSalary: ['', Validators.required],
      //positionSalary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  open(content: any) {
    this.modalService.open(content, this.modalOptions).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        log.debug('Result', result);
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
