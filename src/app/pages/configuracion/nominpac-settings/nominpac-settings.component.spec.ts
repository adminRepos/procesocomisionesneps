import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominpacSettingsComponent } from './nominpac-settings.component';

describe('NominpacSettingsComponent', () => {
  let component: NominpacSettingsComponent;
  let fixture: ComponentFixture<NominpacSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominpacSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominpacSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
