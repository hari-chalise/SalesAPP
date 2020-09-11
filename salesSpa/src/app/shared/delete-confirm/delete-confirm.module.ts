import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmComponent } from './delete-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [DeleteConfirmComponent],
  entryComponents: [DeleteConfirmComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class DeleteConfirmModule { }
