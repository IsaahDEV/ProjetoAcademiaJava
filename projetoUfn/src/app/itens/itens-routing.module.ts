import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensComponent } from './itens/itens.component';
import { ItensFormComponent } from './itens-form/itens-form.component';

const routes: Routes = [
  { path:'', component: ItensComponent },
  { path:'new', component: ItensFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensRoutingModule { }
