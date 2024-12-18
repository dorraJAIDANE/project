import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcentreComponent } from './getcentre.component';

describe('GetcentreComponent', () => {
  let component: GetcentreComponent;
  let fixture: ComponentFixture<GetcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
