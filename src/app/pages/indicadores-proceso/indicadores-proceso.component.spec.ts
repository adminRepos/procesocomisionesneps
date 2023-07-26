import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresProcesoComponent } from './indicadores-proceso.component';

describe('IndicadoresProcesoComponent', () => {
  let component: IndicadoresProcesoComponent;
  let fixture: ComponentFixture<IndicadoresProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadoresProcesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadoresProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
