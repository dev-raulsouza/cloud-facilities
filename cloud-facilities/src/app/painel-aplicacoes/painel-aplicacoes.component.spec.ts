import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAplicacoesComponent } from './painel-aplicacoes.component';

describe('PainelAplicacoesComponent', () => {
  let component: PainelAplicacoesComponent;
  let fixture: ComponentFixture<PainelAplicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelAplicacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAplicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
