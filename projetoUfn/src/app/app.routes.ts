import { Routes } from '@angular/router';
import { ItensComponent } from './itens/itens/itens.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes/solicitacoes.component';

export const routes: Routes = [
  { path: '', pathMatch:'full' , redirectTo: 'itens'},

  { path: 'solicitacoes',  redirectTo: 'solicitacoes'},

  { path: 'itens',
   loadChildren: () => import('./itens/itens.module').then(m => m.ItensModule)
  },

  { path: 'solicitacoes',
   loadChildren: () => import('./solicitacoes/solicitacoes.module').then(m => m.SolicitacoesModule)
  }
];

