import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewprdComponent } from './admin-add-newprd.component';

describe('AdminAddNewprdComponent', () => {
  let component: AdminAddNewprdComponent;
  let fixture: ComponentFixture<AdminAddNewprdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddNewprdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddNewprdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
