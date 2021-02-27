import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.message = this.id;
    console.log(this.id);
  }
}
