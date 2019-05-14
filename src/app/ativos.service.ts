import { Injectable } from '@angular/core';

@Injectable()
export class AtivosService {
    constructor() {}

    valorCompra : number;
    cotas : number;
    ativos = [];
    meusValoresCompra = [
      {
        'simbolo' : 'PETR4',
        'compra' : '24.000',
        'cotas' : 100
      }
    ]
    
}