import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroControlComponent } from './tablero-control.component';

describe('TableroControlComponent', () => {
  let component: TableroControlComponent;
  let fixture: ComponentFixture<TableroControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
