import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Itens } from '../model/itens';
import { first, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private readonly API = 'http://localhost:8080/api/itens';

  constructor(private  httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Itens[]>(this.API)
    .pipe(
      first(),
      tap(itens => console.log(itens))
    );

  }
  loadById(id: string){
    return this.httpClient.get<Itens>(`${this.API}/${id}`)
  }

  save(record: Itens){
    return this.httpClient.post<Itens>(this.API, record).pipe(first());
  }

  public update(itens: Itens){
    return this.httpClient.put<Itens>(`${this.API}/${itens.id}`, itens)
    .pipe(
      tap(
        () => console.log('Atualização bem-sucedida'),
        (error) => console.error('Erro ao autualizar item:', error)
      )
    );
  }
  public delete(id: string){
    return this.httpClient.delete(`${this.API}/${id}`)
    .pipe(
      tap(
        () => console.log('Exclusão realizada'),
        (error) => console.error('Erro ao excluir item:', error)
      )
    );
  }
}
