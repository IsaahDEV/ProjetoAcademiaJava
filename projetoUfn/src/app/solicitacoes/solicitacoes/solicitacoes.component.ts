import { Component, OnInit } from '@angular/core';

import { Solicitacao } from '../model/solicitacoes';
import { SolicitacoesService } from './../services/solicitacoes.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent  implements OnInit{
  solicitacoes: Observable<Solicitacao[]>;

    displayedColumns=[ "solicitante", "setor", "dataSolicitacao", "status" ];

    constructor(private solicitacoesService: SolicitacoesService){
      //this.solicitacoesService = new SolicitacoesService();
      this.solicitacoes = this.solicitacoesService.list();
    }
    ngOnInit(): void{

    }
}
