import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-minha-carteira',
  templateUrl: './minha-carteira.component.html',
  styleUrls: ['./minha-carteira.component.css']
})
export class MinhaCarteiraComponent implements OnInit {
  teste = "";
  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  valorCompra : number;
  ativos = [];
  meusValoresCompra = [
    {
      'simbolo' : 'PETR4',
      'compra' : '24.000'
    }
  ]

  onGetAtivo() {
    this.serverService.getAtivo()
      .subscribe(
        (ativo: any[]) => {
          for (let i in this.meusValoresCompra){
            if (this.meusValoresCompra[i].simbolo == ativo["Global Quote"]["01. symbol"].split('.')[0]){
              this.valorCompra = +this.meusValoresCompra[i].compra;
            }
          }
          this.ativos.push({
            'simbolo' : ativo["Global Quote"]["01. symbol"].split('.')[0],
            'valor' : ativo["Global Quote"]["05. price"],
            'variacao' : (this.valorCompra - +ativo["Global Quote"]["05. price"]).toPrecision(4)
          });
        },
        (error) => console.log(error)
      );
  }

}
