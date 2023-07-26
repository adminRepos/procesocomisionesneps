import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeSettingsComponent } from './eje-settings.component';

describe('EjeSettingsComponent', () => {
  let component: EjeSettingsComponent;
  let fixture: ComponentFixture<EjeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjeSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
