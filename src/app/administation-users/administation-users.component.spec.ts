import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministationUsersComponent } from './administation-users.component';

describe('AdministationUsersComponent', () => {
  let component: AdministationUsersComponent;
  let fixture: ComponentFixture<AdministationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministationUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
