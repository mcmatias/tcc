import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    getAtivoBanco() {
        return this.http.get('https://controlacoes-1c23b.firebaseio.com/data.json')
            .pipe(map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            ));
    }

    getAtivo(codAtivo: string) {
        const api = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+codAtivo+'.SA&interval=15min&outputsize=compact&datatype=json&apikey=EXXAMGIKONB6N0CJ';
        console.log(api)
        return this.http.get(api)
            .pipe(map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            ));
    }

    setNovoAtivo(novoAtivo: any) {
        return this.http.post('https://controlacoes-1c23b.firebaseio.com/data.json', novoAtivo);
    }

}