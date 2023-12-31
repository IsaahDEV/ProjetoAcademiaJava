import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitacoesService } from '../../services/solicitacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Solicitacao } from '../../model/solicitacoes';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';

@Component({
  selector: 'app-solicitacoes-form',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './solicitacoes-form.component.html',
  styleUrl: './solicitacoes-form.component.css'
})
export class SolicitacaoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: SolicitacoesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      solicitante: [''],
      setor: [''],
      quantidade: [''],
      centroCusto: [''],
      dataSolicitacao: [''],
      status: [''],
      codigosItens: [''],
    });
  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadById(id))
    )
    .subscribe(
      (solicitacao) => {
        if(solicitacao){
          this.updateForm(solicitacao);
        }
      }
    );
  }

  updateForm(solicitacao: Solicitacao) {
    this.form.patchValue({
      id: solicitacao.id,
      solicitante: solicitacao.solicitante,
      setor: solicitacao.setor,
      quantidade: solicitacao.quantidade,
      centroCusto: solicitacao.centroCusto,
      dataSolicitacao: solicitacao.dataSolicitacao,
      status: solicitacao.status,
      codigosItens: solicitacao.codigosItens,
    });
  }

  public onSubmit() {
    if (this.form.value.id) {
      this.service.update(this.form.value).subscribe(
        (data) => this.onSuccess(),
        (error) => this.onError()
      );
    } else {
      this.service.save(this.form.value).subscribe(
        () => {
          this.snackBar.open('Solicitação criada com sucesso!', '', {
            duration: 4000,
          });
          this.location.back();
        },
        (error) => {
          console.error(error);
          this.snackBar.open('Erro ao criar a solicitação', '', {
            duration: 4000,
          });
        }
      );
    }
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Error ao salvar!', '', { duration: 4000 });
  }

  private onSuccess() {
    this.snackBar.open('Item salvo com Suceso!', '', { duration: 4000 });
    this.onCancel();
  }
}
