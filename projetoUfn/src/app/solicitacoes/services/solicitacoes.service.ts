import { Injectable } from '@angular/core';
import { Solicitacao } from '../model/solicitacoes';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {
 private readonly API = "/assets/solicitacoes.json"

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Solicitacao[]>(this.API).pipe(
      first()
    );



  }

}
