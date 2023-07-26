import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirSettingsComponent } from './dir-settings.component';

describe('DirSettingsComponent', () => {
  let component: DirSettingsComponent;
  let fixture: ComponentFixture<DirSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
