import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Itens } from '../model/itens';
import { ItensService } from '../services/itens.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit{

  itens: Observable<Itens[]>;
  displayedColumns = ['codigo', 'nome', 'quantidade', 'acoes'];



  constructor(
    private  itensService: ItensService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    ){
    this.itens = this.itensService.list().pipe(
      catchError(error => {
       this.onError('Erro ao carregar itens.');
        return of([])
      })
    );
    //this.itensService= new itensService();
  }

  onError(erroMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data:erroMsg

    });
  }
  ngOnInit(): void {

}
onAdd() {
  this.router.navigate(['new'], { relativeTo: this.route });
}

}
