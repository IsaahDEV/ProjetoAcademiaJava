import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
const routes: Routes = [
  { path:'', component: SolicitacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
