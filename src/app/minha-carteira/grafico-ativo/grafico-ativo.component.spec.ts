import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAtivoComponent } from './grafico-ativo.component';

describe('GraficoAtivoComponent', () => {
  let component: GraficoAtivoComponent;
  let fixture: ComponentFixture<GraficoAtivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoAtivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
