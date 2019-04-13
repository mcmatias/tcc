import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosAtivoComponent } from './infos-ativo.component';

describe('InfosAtivoComponent', () => {
  let component: InfosAtivoComponent;
  let fixture: ComponentFixture<InfosAtivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosAtivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
