import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMapComponent } from './background-map.component';

describe('BackgroundMapComponent', () => {
  let component: BackgroundMapComponent;
  let fixture: ComponentFixture<BackgroundMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
