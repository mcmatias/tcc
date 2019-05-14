import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';
import { AtivosService } from '../ativos.service';

@Component({
  selector: 'app-minha-carteira',
  templateUrl: './minha-carteira.component.html',
  styleUrls: ['./minha-carteira.component.css']
})
export class MinhaCarteiraComponent implements OnInit {
  constructor(private serverService: ServerService, private ativoService: AtivosService) { }

  ngOnInit() {
  }

  // valorCompra : number;
  // ativos = [];
  // meusValoresCompra = [
  //   {
  //     'simbolo' : 'PETR4',
  //     'compra' : '24.000'
  //   }
  // ]
  ativos = this.ativoService.ativos;
  codAtivo: string;

  onGetAtivo($event) {
    alert($event.target.value);
    this.codAtivo = $event.target.value;
    this.serverService.getAtivo(this.codAtivo)
      .subscribe(
        (ativo: any[]) => {
          for (let i in this.ativoService.meusValoresCompra){
            if (this.ativoService.meusValoresCompra[i].simbolo == ativo["Global Quote"]["01. symbol"].split('.')[0]){
              this.ativoService.valorCompra = +this.ativoService.meusValoresCompra[i].compra;
              this.ativoService.cotas = this.ativoService.meusValoresCompra[i].cotas;
            }
          }
          this.ativoService.ativos.push({
            'simbolo' : ativo["Global Quote"]["01. symbol"].split('.')[0],
            'valor' : ativo["Global Quote"]["05. price"],
            'variacao' : +((this.ativoService.valorCompra - +ativo["Global Quote"]["05. price"]).toPrecision(4))*this.ativoService.cotas
          });
        },
        (error) => console.log(error)
      );
  }

}
