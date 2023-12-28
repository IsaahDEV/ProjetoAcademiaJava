import { Component, OnInit} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItensService } from '../../services/itens.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from '../../model/itens';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-itens-form',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './itens-form.component.html',
  styleUrl: './itens-form.component.css',
})
export class ItensFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private service: ItensService,
      private snackBar: MatSnackBar,
      private location: Location,
      private  router: ActivatedRoute
      ) {
    this.form = this.formBuilder.group({
      id: '',
      codigo: [null],
      nome: [null],
      preco: [null],
      quantidade: [null],
   });
  }
  ngOnInit(): void {
    this.router.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadById(id))
    )
    .subscribe(
      (itens) => {
        if (itens){
          this.updateForm(itens);
        }
      });

  }
   public updateForm(itens: Itens) {
    console.log(itens)
    this.form.patchValue({
      id: itens.id,
      codigo: itens.codigo,
      nome: itens.nome,
      preco: itens.preco,
      quantidade: itens.quantidade
    })
  }

  public onSubmit() {
    console.log(this.form.value)
    if(this.form.value.id){
      this.service.update(this.form.value)
      .subscribe(
        (result) => this.onSuccess(),
        (error) => this.onError()
        );
      }else{
        this.service.save(this.form.value).subscribe(
          (result) => this.onSuccess(),
          (error) => this.onError()
        );
      }

    }

  public onCancel() {
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Item salvo com sucesso!', '', {duration: 2000});
    this.onCancel();
  }

  onError(){
    this.snackBar.open('Error ao salvar!', '', {duration: 2000});

  }

}
