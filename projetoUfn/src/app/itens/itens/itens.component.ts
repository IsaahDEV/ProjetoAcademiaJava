import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Itens } from '../model/itens';
@Component({
  selector: 'app-itens',
  standalone: true,
  imports: [CommonModule, MatTableModule ],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.css'
})
export class ItensComponent{
  itens: Itens[] = [
    {
      _id: '852525',
      nome: 'fita',
      codigo: 1010,
      preco: 10.25,
      quantidade: 50,
      solicitacoes: []
    }
  ];
  displayedColumns =['codigo', 'nome', 'quantidade']




}
