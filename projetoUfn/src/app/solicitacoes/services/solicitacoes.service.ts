import { Injectable } from '@angular/core';
import { Solicitacao } from '../model/solicitacoes';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {
  private readonly API = 'http://localhost:8080/api/solicitacoes'

  constructor(private httpclient: HttpClient) { }

  list(){
    return this.httpclient.get<Solicitacao[]>(this.API)
    .pipe(
      first()
    );
  }

  public loadById(id: string) {
    return this.httpclient.get<Solicitacao>(`${this.API}/${id}`);
  }

  public update(solicitacao: Solicitacao){
    return this.httpclient.put<Solicitacao>(`${this.API}/${solicitacao.id}`, solicitacao)
      .pipe(
        tap(
          () => console.log('Atualização bem-sucedida'),
          (error) => console.error('Erro ao atualizar Solicitacao:', error)
        )
      );
  }

  save(solicitacao: Solicitacao) {
    return this.httpclient.post<Solicitacao>(this.API, solicitacao).pipe(first());
  }
}
