import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarpessoasPage } from './gerenciarpessoas.page';

describe('GerenciarpessoasPage', () => {
  let component: GerenciarpessoasPage;
  let fixture: ComponentFixture<GerenciarpessoasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarpessoasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarpessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
