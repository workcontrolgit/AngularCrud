import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Logger } from '@core';

import { ApiHttpService } from '@core/services/api-http.service';
import { ApiEndpointsService } from '@core/services/api-endpoints.service';
import { Position } from '@shared/models/position';
import { DataResponse } from '@shared/classes/data-response';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmationDialogService } from '@core/services/confirmation-dialog.service';

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
    private apiEndpointsService: ApiEndpointsService,
    private confirmationDialogService: ConfirmationDialogService
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
    this.confirmationDialogService
      .confirm('Update confirmation', 'Are you sure?')
      .then((confirmed) => {
        log.debug('onUpdate: ', this.entryForm.value);
        //here confirmed is true if user clicks OK and false if user clicks Cancel
      })
      .catch(() => {
        log.debug('onUpdate: ', this.entryForm.get('positionNumber').value);
      });
  }

  onDelee() {
    this.confirmationDialogService
      .confirm('Delete confirmation', 'Are you sure?')
      .then((confirmed) => {
        log.debug('onUpdate: ', this.entryForm.value);
        //here confirmed is true if user clicks OK and false if user clicks Cancel
      })
      .catch(() => {
        log.debug('onUpdate: ', this.entryForm.get('positionNumber').value);
      });
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
    });
  }
}
