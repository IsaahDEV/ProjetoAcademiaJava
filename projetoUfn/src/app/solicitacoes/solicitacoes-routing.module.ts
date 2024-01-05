import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacoesComponent } from './containers/solicitacoes/solicitacoes.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SolicitacaoFormComponent } from './containers/solicitacoes-form/solicitacoes-form.component';
const routes: Routes = [
  { path: '', component: SolicitacoesComponent },
  {path: 'nova-solicitacao', component: SolicitacaoFormComponent},
  {path: 'editar-solicitacao/:id', component: SolicitacaoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatTableModule, CommonModule],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
