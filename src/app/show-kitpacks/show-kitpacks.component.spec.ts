import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKitpacksComponent } from './show-kitpacks.component';

describe('ShowKitpacksComponent', () => {
  let component: ShowKitpacksComponent;
  let fixture: ComponentFixture<ShowKitpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKitpacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowKitpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
