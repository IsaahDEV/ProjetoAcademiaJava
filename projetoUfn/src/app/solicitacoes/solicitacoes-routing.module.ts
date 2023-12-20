import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
const routes: Routes = [
  { path:'', component: SolicitacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatTableModule, CommonModule],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
