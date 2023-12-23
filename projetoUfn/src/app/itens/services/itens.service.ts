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
      //tap(itens => console.log(itens))
    );

  }
  save(record: Itens){
    return this.httpClient.post<Itens>(this.API, record).pipe(first());
  }
}
