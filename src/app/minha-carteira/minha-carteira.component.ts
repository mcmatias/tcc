import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';
import { AtivosService } from '../ativos.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-minha-carteira',
  templateUrl: './minha-carteira.component.html',
  styleUrls: ['./minha-carteira.component.css']
})
export class MinhaCarteiraComponent implements OnInit {
  constructor(private serverService: ServerService, private ativoService: AtivosService) { }

  novoAtivoForm: FormGroup;
  listaAtivos = [];
  ngOnInit() {
    this.novoAtivoForm = new FormGroup({
      'simboloNovoAtivo': new FormControl(null),
      'cotasNovoAtivo': new FormControl(null),
      'valorDeCompraNovoAtivo': new FormControl(null)
    });

    // this.serverService.getAtivoBanco()
    //   .subscribe(
    //     (ativo: any[]) => {
    //       this.listaAtivos = Object.values(ativo);
    //       for(let i=0; i<this.listaAtivos.length; i++) {
    //         this.ativoService.meusValoresCompra.push({
    //           'compra' : this.listaAtivos[i].compra,
    //           'cotas' : this.listaAtivos[i].cotas,
    //           'simbolo' : this.listaAtivos[i].simbolo
    //         });
    //       }

    //     },
    //     (error) => console.log(error)
    //   )


  }

  
  abc = this.ativoService.meusValoresCompra;
  ativos = this.ativoService.ativos;
  ativosRendimento = this.ativoService.ativosRendimento;
  codAtivo: string;

  onGetAtivoServer(ativo: string) {
    //pego no this.ativoService.ativos o que eu selecionei
    //depois com um for no meusValoresCompra eu pego oq tem simbolo igual
    //faco os calulos
    // var ativoEscolhido = {
    //   'simbolo' : ' ',
    //   'valor' : ' ',
    //   'variacao' : ' '
    // };

    var ativoEscolhido = this.ativoService.ativos.filter(
      (element) => {
        return (element.simbolo == ativo)
      }
    )
    var dadosBancoAtivoEscolhido = this.ativoService.meusValoresCompra.filter(
      (element) => {
        return (element.simbolo == ativo)
      }
    )
    
    this.ativoService.ativosRendimento.push({
                 'simbolo' : ativoEscolhido[0].simbolo,
                 'valor' : ativoEscolhido[0].valor,
                 'variacao' : (+((ativoEscolhido[0].valor - dadosBancoAtivoEscolhido[0].compra).toFixed(2))*dadosBancoAtivoEscolhido[0].compra).toFixed(2)
               });


  }

  // onGetAtivo(ativo: string) {
  //   //alert($event.target.value);
  //   this.codAtivo = ativo;
  //   this.serverService.getAtivo(this.codAtivo)
  //     .subscribe(
  //       (ativo: any[]) => {
  //         for (let i in this.ativoService.meusValoresCompra){
  //           if (this.ativoService.meusValoresCompra[i].simbolo == ativo["Global Quote"]["01. symbol"].split('.')[0]){
  //             this.ativoService.valorCompra = +this.ativoService.meusValoresCompra[i].compra;
  //             this.ativoService.cotas = this.ativoService.meusValoresCompra[i].cotas;
  //           }
  //         }
  //         this.ativoService.ativos.push({
  //           'simbolo' : ativo["Global Quote"]["01. symbol"].split('.')[0],
  //           'valor' : ativo["Global Quote"]["05. price"],
  //           'variacao' : +((+ativo["Global Quote"]["05. price"] - +this.ativoService.valorCompra).toPrecision(4))*this.ativoService.cotas
  //         });
  //       },
  //       (error) => console.log(error)
  //     );
  // }

  onSubmit() {
    var novoAtivo = {
      'simbolo' : this.novoAtivoForm.controls.simboloNovoAtivo.value,
      'compra' : this.novoAtivoForm.controls.valorDeCompraNovoAtivo.value,
      'cotas' : this.novoAtivoForm.controls.cotasNovoAtivo.value
    }

    this.serverService.setNovoAtivo(novoAtivo)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

    this.novoAtivoForm.reset();
    location.reload();
  }

}
