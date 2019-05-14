import { Component, OnInit, Input } from '@angular/core';
import { AtivosService } from 'src/app/ativos.service';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {
  @Input() ativo : any;
  constructor(private ativoService: AtivosService) { }

  ngOnInit() {
  }

  ativos = this.ativoService.ativos;
  
}
