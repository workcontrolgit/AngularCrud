import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, MasterRoutingModule],
  declarations: [MasterComponent],
})
export class MasterModule {}
