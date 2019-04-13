import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    getAtivo() {
        const api = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+'PETR4'+'.SA&interval=15min&outputsize=compact&datatype=json&apikey=EXXAMGIKONB6N0CJ';
        console.log(api)
        return this.http.get(api)
            .pipe(map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            ));
    }
}