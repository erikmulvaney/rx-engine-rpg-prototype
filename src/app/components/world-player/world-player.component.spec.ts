import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPlayerComponent } from './world-player.component';

describe('WorldPlayerComponent', () => {
  let component: WorldPlayerComponent;
  let fixture: ComponentFixture<WorldPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
