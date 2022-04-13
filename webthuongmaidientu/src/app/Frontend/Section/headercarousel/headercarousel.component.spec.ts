import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercarouselComponent } from './headercarousel.component';

describe('HeadercarouselComponent', () => {
  let component: HeadercarouselComponent;
  let fixture: ComponentFixture<HeadercarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
