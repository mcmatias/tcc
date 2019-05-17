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

    this.serverService.getAtivoBanco()
      .subscribe(
        (ativo: any[]) => {
          this.listaAtivos = Object.values(ativo);
          for(let i=0; i<this.listaAtivos.length; i++) {
            this.ativoService.testeDadosBanco.push({
              'compra' : this.listaAtivos[i].compra,
              'cotas' : this.listaAtivos[i].cotas,
              'simbolo' : this.listaAtivos[i].simbolo
            });
          }

        },
        (error) => console.log(error)
      )


  }

  
  abc = this.ativoService.testeDadosBanco;
  ativos = this.ativoService.ativos;
  codAtivo: string;

  onGetAtivo(ativo: string) {
    //alert($event.target.value);
    this.codAtivo = ativo;
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
  }

}
