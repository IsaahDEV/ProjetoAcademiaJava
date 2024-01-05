import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitacao } from '../../model/solicitacoes';
import { SolicitacoesService } from '../../services/solicitacoes.service';
import { Observable } from 'rxjs';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './solicitacoes-list.component.html',
  styleUrl: './solicitacoes-list.component.css'
})
export class ListaSolicitacoesComponent {

  @Input() solicitacao: Solicitacao[] = [];
  @Output() add = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);


  displayedColumns = ['solicitante', 'setor', 'dataSolicitacao', 'status', 'acoes'];

  constructor( private route: Router){

  }

   public onAdd(){
    this.add.emit(true)
  }

   public onEdit(id: string){
    this.route.navigate(['solicitacoes/editar-solicitacao/', id])
  }

  public onDelete(solicitacao: Solicitacao){
    this.delete.emit(solicitacao);
  }
}
