import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SolicitacoesService } from './services/solicitacoes.service';
import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';



@NgModule({
  declarations: [
    SolicitacoesComponent,
  ],
  imports: [
    CommonModule,
    SolicitacoesRoutingModule,
    AppMaterialModule,
    HttpClientModule,


  ],
  providers:[SolicitacoesService]
})
export class SolicitacoesModule { }
