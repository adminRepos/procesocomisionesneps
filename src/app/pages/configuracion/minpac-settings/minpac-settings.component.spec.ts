import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinpacSettingsComponent } from './minpac-settings.component';

describe('MinpacSettingsComponent', () => {
  let component: MinpacSettingsComponent;
  let fixture: ComponentFixture<MinpacSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinpacSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinpacSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
