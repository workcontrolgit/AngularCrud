import { Component, OnInit, Renderer2 } from '@angular/core';

import { environment } from '@env/environment';
import { Position } from '@shared/models/position';
import { ApiHttpService } from '@core/services/api-http.service';
import { ApiEndpointsService } from '@core/services/api-endpoints.service';
import { DataTablesResponse } from '@shared/classes/data-tables-response';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  version: string | null = environment.version;

  dtOptions: DataTables.Settings = {};
  positions: Position[];
  isLoading = false;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.apiHttpService
          .post(this.apiEndpointsService.postPositionsEndpoint(), dataTablesParameters)

          .subscribe((resp: DataTablesResponse) => {
            this.positions = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: [],
            });
          });
      },
      columns: [
        {
          title: 'Number',
          data: 'positionNumber',
        },
        {
          title: 'Title',
          data: 'positionTitle',
        },
        {
          title: 'Description',
          data: 'positionDescription',
        },
      ],
    };
  }
}
