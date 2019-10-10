import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoInfoPage } from './pagamento-info.page';

describe('PagamentoInfoPage', () => {
  let component: PagamentoInfoPage;
  let fixture: ComponentFixture<PagamentoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
