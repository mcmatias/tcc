import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';
import { AtivosService } from '../ativos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private serverService: ServerService, private ativoService: AtivosService) { }

  listaAtivos = [];
  valorInvestido = 0;
  ativosAtuais = [];
  valorAtual = 0;
  porcentagemRendimento = 0;

  ngOnInit() {

    this.serverService.getAtivoBanco()
      .subscribe(
        (ativo: any[]) => {
          this.listaAtivos = Object.values(ativo);
          for(let i=0; i<this.listaAtivos.length; i++) {
            this.valorInvestido += +(this.listaAtivos[i].compra*this.listaAtivos[i].cotas);
            this.ativoService.meusValoresCompra.push({
              'compra' : this.listaAtivos[i].compra,
              'cotas' : this.listaAtivos[i].cotas,
              'simbolo' : this.listaAtivos[i].simbolo
            });
             this.serverService.getAtivo(this.listaAtivos[i].simbolo)
       .subscribe(
         (ativo: any[]) => {
           this.ativosAtuais = Object.values(ativo);
           this.ativoService.ativos.push({
                       'simbolo' : ativo["Global Quote"]["01. symbol"].split('.')[0],
                       'valor' : ativo["Global Quote"]["05. price"],
                       'variacao' : +((+ativo["Global Quote"]["05. price"] - +this.ativoService.valorCompra).toPrecision(4))*this.ativoService.cotas
                     });
           this.valorAtual += +(+ativo["Global Quote"]["05. price"]*+this.listaAtivos[i].cotas);
           this.porcentagemRendimento = +(((this.valorAtual - this.valorInvestido)/this.valorInvestido)*100).toFixed(2);
         },
         (error) => console.log(error)
       );
      
          }
        },
        (error) => console.log(error)
      )
    
    
    // for(let i=0; i<this.ativoService.meusValoresCompra.length; i++) {
    //   this.serverService.getAtivo(this.ativoService.meusValoresCompra[i].simbolo)
    //   .subscribe(
    //     (ativo: any[]) => {
    //       this.ativosAtuais = Object.values(ativo);
    //       for (let i in this.ativoService.meusValoresCompra){
    //         if (this.ativoService.meusValoresCompra[i].simbolo == ativo["Global Quote"]["01. symbol"].split('.')[0]){
    //           this.ativoService.valorCompra = +this.ativoService.meusValoresCompra[i].compra;
    //           this.ativoService.cotas = this.ativoService.meusValoresCompra[i].cotas;
    //         }
    //       }
    //       this.ativoService.ativos.push({
    //         'simbolo' : ativo["Global Quote"]["01. symbol"].split('.')[0],
    //         'valor' : ativo["Global Quote"]["05. price"],
    //         'variacao' : +((+ativo["Global Quote"]["05. price"] - +this.ativoService.valorCompra).toPrecision(4))*this.ativoService.cotas
    //       });
    //       console.log(ativo["Global Quote"]["01. symbol"].split('.')[0] + " " + +ativo["Global Quote"]["05. price"])
    //       this.valorAtual += +(+ativo["Global Quote"]["05. price"]*+this.ativoService.cotas);
    //     },
    //     (error) => console.log(error)
    //   );
    // } 

  }

}
