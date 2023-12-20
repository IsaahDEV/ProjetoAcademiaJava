import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Itens } from '../model/itens';
import { first, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private readonly API = '/assets/itens.json';

  constructor(private  httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Itens[]>(this.API)
    .pipe(
      first(),
      //tap(itens => console.log(itens))
    );

  }
}
