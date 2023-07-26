import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetapacSettingsComponent } from './metapac-settings.component';

describe('MetapacSettingsComponent', () => {
  let component: MetapacSettingsComponent;
  let fixture: ComponentFixture<MetapacSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetapacSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetapacSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
