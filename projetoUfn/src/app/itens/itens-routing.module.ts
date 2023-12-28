import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, } from '@angular/router';
import { ItensComponent } from './conteiners/itens/itens.component';
import { ItensFormComponent } from './conteiners/itens-form/itens-form.component';
import { Itens } from './model/itens';

const routes: Routes = [
  { path:'', component: ItensComponent },
  { path:'novo', component: ItensFormComponent },
  { path:'editar/:id', component: ItensFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensRoutingModule { }
