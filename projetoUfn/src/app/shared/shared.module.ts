import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [

    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatFormFieldModule,

  ],
  exports:[ErrorDialogComponent]
})
export class SharedModule { }
