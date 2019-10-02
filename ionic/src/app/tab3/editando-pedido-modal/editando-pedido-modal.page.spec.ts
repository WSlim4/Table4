import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditandoPedidoModalPage } from './editando-pedido-modal.page';

describe('EditandoPedidoModalPage', () => {
  let component: EditandoPedidoModalPage;
  let fixture: ComponentFixture<EditandoPedidoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditandoPedidoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditandoPedidoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
