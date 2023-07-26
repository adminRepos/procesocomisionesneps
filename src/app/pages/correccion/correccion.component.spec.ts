import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreccionComponent } from './correccion.component';

describe('CorreccionComponent', () => {
  let component: CorreccionComponent;
  let fixture: ComponentFixture<CorreccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
