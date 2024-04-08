import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRouteComponent } from './simple-route.component';

describe('SimpleRouteComponent', () => {
  let component: SimpleRouteComponent;
  let fixture: ComponentFixture<SimpleRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
