import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoUfn';

  constructor(private route: Router) {}

  public navItens(){
    this.route.navigate(['/itens']);
  }

  public navSolicitacoes(){
    //solicitacoes
    this.route.navigate(['/solicitacoes']);
  }
}
