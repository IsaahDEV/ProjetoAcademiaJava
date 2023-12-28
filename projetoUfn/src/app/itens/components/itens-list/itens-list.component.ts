import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from '../../model/itens';



@Component({
  selector: 'app-itens-list',
  standalone: true,
  imports:[CommonModule, AppMaterialModule],
  templateUrl: './itens-list.component.html',
  styleUrl: './itens-list.component.css'
})
export class ItensListComponent {

  @Input() itens:Itens[] =[];
  @Output() add = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  displayedColumns = ['codigo', 'nome', 'quantidade', 'acoes'];

  constructor( private route: Router){

  }

    public onAdd() {
   this.add.emit(true);
  }

  public onEdit(id: string){
    this.route.navigate(['itens/editar/', id])
  }

  public onDelete(itens: Itens){
    this.delete.emit(itens);
  }
}
