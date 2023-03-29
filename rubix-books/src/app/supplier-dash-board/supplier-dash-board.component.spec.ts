import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDashBoardComponent } from './supplier-dash-board.component';

describe('SupplierDashBoardComponent', () => {
  let component: SupplierDashBoardComponent;
  let fixture: ComponentFixture<SupplierDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
