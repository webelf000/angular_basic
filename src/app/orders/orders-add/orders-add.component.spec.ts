import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAddComponent } from './orders-add.component';

describe('OrdersAddComponent', () => {
  let component: OrdersAddComponent;
  let fixture: ComponentFixture<OrdersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
