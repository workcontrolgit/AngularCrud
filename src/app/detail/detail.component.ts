import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Logger, UntilDestroy, untilDestroyed } from '@core';

import { ApiHttpService } from '@core/services/api-http.service';
import { ApiEndpointsService } from '@core/services/api-endpoints.service';
import { Position } from '@shared/models/position';
import { DataResponse } from '@shared/classes/data-response';

const log = new Logger('Detail');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  version: string | null = environment.version;
  message = '';
  sub: any;
  id: any;
  entryForm: FormGroup;
  error: string | undefined;
  currentRecord: any;
  model: any = { position: {} };

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.message = this.id;
    log.debug(this.id);
    this.read(this.route.snapshot.paramMap.get('id'));
    log.debug(this.model.position);

    // let pThis: any = this;
    // pThis.entryForm.setValue({
    //   positionNumber: pThis.model.position.positionNumber,
    //   positionTitle: pThis.model.position.positionTitle,
    //   positionDescription: pThis.model.position.positionDescription,
    // });
  }

  onSubmit() {
    log.debug(this.entryForm);
    log.debug(this.entryForm.get('positionNumber').value);
  }

  read(id: any): void {
    this.apiHttpService.get(this.apiEndpointsService.getPositionByIdEndpoint(id), id).subscribe(
      (resp: DataResponse) => {
        //Assign data to class-level model object.
        this.model.position = resp.data;
        //Populate reactive form controls with model object properties.
        this.entryForm.setValue({
          positionNumber: this.model.position.positionNumber,
          positionTitle: this.model.position.positionTitle,
          positionDescription: this.model.position.positionDescription,
          positionSalary: this.model.position.positionSalary,
        });
        // log.debug(this.currentRecord);
        // log.debug(resp);
        // log.debug(this.model.position);
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
      positionNumber: ['', Validators.required],
      positionTitle: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionSalary: ['', Validators.required],
    });
  }
}
