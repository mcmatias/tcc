import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCapitalComponent } from './grafico-capital.component';

describe('GraficoCapitalComponent', () => {
  let component: GraficoCapitalComponent;
  let fixture: ComponentFixture<GraficoCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
