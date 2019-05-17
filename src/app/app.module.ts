import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GraficoCapitalComponent } from './home/grafico-capital/grafico-capital.component';

import { Routes, RouterModule } from '@angular/router';
import { MinhaCarteiraComponent } from './minha-carteira/minha-carteira.component';
import { AtivosComponent } from './minha-carteira/ativos/ativos.component';
import { InfosAtivoComponent } from './minha-carteira/infos-ativo/infos-ativo.component';
import { GraficoAtivoComponent } from './minha-carteira/grafico-ativo/grafico-ativo.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerService } from './server.service';
import { AtivosService } from './ativos.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'minhaCarteira', component: MinhaCarteiraComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GraficoCapitalComponent,
    MinhaCarteiraComponent,
    AtivosComponent,
    InfosAtivoComponent,
    GraficoAtivoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ServerService, AtivosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
