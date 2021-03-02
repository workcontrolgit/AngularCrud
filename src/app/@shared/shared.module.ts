import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '@core/services/confirmation-dialog.service';
@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ConfirmationDialogComponent],
  exports: [LoaderComponent, ConfirmationDialogComponent],
  providers: [ConfirmationDialogService],
})
export class SharedModule {}
