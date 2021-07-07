import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLiveMapComponent } from './load-live-map.component';

describe('LoadLiveMapComponent', () => {
  let component: LoadLiveMapComponent;
  let fixture: ComponentFixture<LoadLiveMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadLiveMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadLiveMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
