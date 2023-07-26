import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NometapacSettingsComponent } from './nometapac-settings.component';

describe('NometapacSettingsComponent', () => {
  let component: NometapacSettingsComponent;
  let fixture: ComponentFixture<NometapacSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NometapacSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NometapacSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
