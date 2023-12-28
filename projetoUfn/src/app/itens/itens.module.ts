import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ItensRoutingModule } from './itens-routing.module';
import { ItensService } from './services/itens.service';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    ItensRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    SharedModule,
    MatIconModule,


  ],


  providers:[ItensService]
})
export class ItensModule { }
