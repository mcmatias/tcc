import { Injectable } from '@angular/core';

@Injectable()
export class AtivosService {
    constructor() {}

    valorCompra : number;
    cotas : number;
    ativos = [];
    meusValoresCompra = [];
    ativosRendimento = [];

    testeDadosBanco = [];
    
}