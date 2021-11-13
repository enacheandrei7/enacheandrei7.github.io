import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionPlaneComponent } from './description-plane.component';

describe('DescriptionPlaneComponent', () => {
  let component: DescriptionPlaneComponent;
  let fixture: ComponentFixture<DescriptionPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionPlaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
