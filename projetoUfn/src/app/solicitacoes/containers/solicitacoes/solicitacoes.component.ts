import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { ListaSolicitacoesComponent } from '../../components/solicitacoes-list/solicitacoes-list.component';
import { Solicitacao } from '../../model/solicitacoes';
import { SolicitacoesService } from '../../services/solicitacoes.service';

@Component({
    selector: 'app-solicitacoes',
    standalone: true,
    templateUrl: './solicitacoes.component.html',
    styleUrl: './solicitacoes.component.css',
    imports: [CommonModule, AppMaterialModule, ListaSolicitacoesComponent]
})
export class SolicitacoesComponent implements OnInit{
  [x: string]: any;

  solicitacao$: Observable<Solicitacao[]> | null = null;
  snackBar: any;


  constructor( private solicitacoesService: SolicitacoesService,
    public diaLog: MatDialog,
    public router: Router
    ){
      this.refresh();
    }
    private refresh(){
      this.solicitacao$ = this.solicitacoesService.list().pipe(
        catchError((error) => {
          this.onError('Error ao carregar as solicitacao ');
          return of([]);
        })
      );
    }
    onError(errorMsg: string){
      console.log(errorMsg);
    }
    ngOnInit(): void {

    }

  public onAdd() {
    this.router.navigate(['/solicitacoes/nova-solicitacao'])
  }

  onDelete(solicitacao: Solicitacao){
    this.solicitacoesService.delete(solicitacao.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Solicitacao removida com sucesso!', '', {duration: 2000, verticalPosition: 'top', hotizontalPosition: 'center'
      });
      },
      error => this.onError('Error ao tentar remover a solicitação')
    )
  }

}
