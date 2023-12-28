import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Itens } from '../../model/itens';
import { ItensService } from '../../services/itens.service';
import { ItensListComponent } from '../../components/itens-list/itens-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';


@Component({
  selector: 'app-itens',
  standalone: true,
  imports:[CommonModule, AppMaterialModule, ItensListComponent],
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit{

  itens$: Observable<Itens[]> | null= null;
  snackBar: any;




  constructor(
    private itensServise: ItensService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.refresh();

  }

  private refresh(){
    this.itens$ = this.itensServise.list().pipe(
      catchError((error) => {
        this.onError('Error ao Carregar o itens.');
        return of([]);
      })
    );
  }

  onError(erroMsg: string){
    //this.dialog.open(ErrorDialogComponent, {
     // data:erroMsg

   // });
   console.log(erroMsg);
  }
  ngOnInit(): void {

}
 public onAdd() {
  this.router.navigate(['itens/novo'],);
}

onDelete(itens:Itens){
  this.itensServise.delete(itens.id).subscribe(
    () => {
      this.refresh();
      this.snackBar.open('Item removido com suceso!', '', {duration:2000, verticalPosition: 'top', horizontalPosition: 'center'
    });
  },
  error => this.onError('Erro ao tentar remover Item')
  )
}

}
