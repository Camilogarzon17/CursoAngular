import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLComponent } from './products-l.component';

describe('ProductsLComponent', () => {
  let component: ProductsLComponent;
  let fixture: ComponentFixture<ProductsLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
