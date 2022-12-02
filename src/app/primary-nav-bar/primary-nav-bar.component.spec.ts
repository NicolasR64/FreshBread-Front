import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavBarComponent } from './primary-nav-bar.component';

describe('PrimaryNavBarComponent', () => {
  let component: PrimaryNavBarComponent;
  let fixture: ComponentFixture<PrimaryNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
