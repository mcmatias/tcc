import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaCarteiraComponent } from './minha-carteira.component';

describe('MinhaCarteiraComponent', () => {
  let component: MinhaCarteiraComponent;
  let fixture: ComponentFixture<MinhaCarteiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaCarteiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
