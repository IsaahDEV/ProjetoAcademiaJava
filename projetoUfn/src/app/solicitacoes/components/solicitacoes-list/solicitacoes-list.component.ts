import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitacao } from '../../model/solicitacoes';
import { SolicitacoesService } from '../../services/solicitacoes.service';
import { Observable } from 'rxjs';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';

@Component({
  selector: 'app-solicitacoes-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './solicitacoes-list.component.html',
  styleUrl: './solicitacoes-list.component.css'
})
export class ListaSolicitacoesComponent {

  solicitacoes: Observable<Solicitacao[]>;
  @Output() add = new EventEmitter(false);


  displayedColumns = ['solicitante', 'setor', 'dataSolicitacao', 'status', 'acoes'];

  constructor(private solicitacoesService: SolicitacoesService) {
    this.solicitacoes = this.solicitacoesService.list();
  }

  onAdd(){
    this.add.emit(true)
  }
  onEdit(id: string){

  }

  onDelete(solicitacao: Solicitacao){

  }
}
