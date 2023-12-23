import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ItensRoutingModule } from './itens-routing.module';
import { ItensComponent } from './itens/itens.component';
import { ItensService } from './services/itens.service';
import {MatIconModule} from '@angular/material/icon';
import { ItensFormComponent } from './itens-form/itens-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItensComponent,


  ],

  imports: [
    CommonModule,
    ItensRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule

  ],


  providers:[ItensService]
})
export class ItensModule { }
