import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoPessoaPage } from './criando-pessoa.page';

describe('CriandoPessoaPage', () => {
  let component: CriandoPessoaPage;
  let fixture: ComponentFixture<CriandoPessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriandoPessoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriandoPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
