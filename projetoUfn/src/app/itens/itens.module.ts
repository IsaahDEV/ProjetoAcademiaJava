import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ItensRoutingModule } from './itens-routing.module';
import { ItensComponent } from './itens/itens.component';
import { ItensService } from './services/itens.service';

@NgModule({
  declarations: [
    ItensComponent,

  ],

  imports: [
    CommonModule,
    ItensRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    SharedModule

  ],


  providers:[ItensService]
})
export class ItensModule { }
