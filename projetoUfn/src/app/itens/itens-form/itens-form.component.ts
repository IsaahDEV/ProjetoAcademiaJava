import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItensService } from '../services/itens.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-itens-form',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './itens-form.component.html',
  styleUrl: './itens-form.component.css'
})
export class ItensFormComponent implements OnInit{


  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service:ItensService,
    private snackBar: MatSnackBar ){
    this.form = this.formBuilder.group({
      codigo: [null],
      nome: [null],
      preco: [null],
      quantidade: [null]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.save(this.form.value)
    . subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){
  }
   private onError(){
    this.snackBar.open('Erro ao salvar itens.', '',{duration: 5000});

   }
}
