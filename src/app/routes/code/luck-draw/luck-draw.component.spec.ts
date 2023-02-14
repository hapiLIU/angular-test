import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckDrawComponent } from './luck-draw.component';

describe('LuckDrawComponent', () => {
  let component: LuckDrawComponent;
  let fixture: ComponentFixture<LuckDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckDrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
