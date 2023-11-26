import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensComponent } from './itens/itens.component';

const routes: Routes = [
  { path:'', component: ItensComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensRoutingModule { }
