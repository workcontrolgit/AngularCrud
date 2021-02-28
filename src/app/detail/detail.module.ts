import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, DetailRoutingModule, ReactiveFormsModule],
  declarations: [DetailComponent],
})
export class DetailModule {}
