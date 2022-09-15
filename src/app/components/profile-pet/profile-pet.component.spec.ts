import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePetComponent } from './profile-pet.component';

describe('ProfilePetComponent', () => {
  let component: ProfilePetComponent;
  let fixture: ComponentFixture<ProfilePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
