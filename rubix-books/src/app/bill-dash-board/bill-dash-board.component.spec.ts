import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDashBoardComponent } from './bill-dash-board.component';

describe('BillDashBoardComponent', () => {
  let component: BillDashBoardComponent;
  let fixture: ComponentFixture<BillDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
