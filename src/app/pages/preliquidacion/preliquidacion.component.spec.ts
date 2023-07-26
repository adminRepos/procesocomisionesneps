import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreliquidacionComponent } from './preliquidacion.component';

describe('PreliquidacionComponent', () => {
  let component: PreliquidacionComponent;
  let fixture: ComponentFixture<PreliquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreliquidacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreliquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
