import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageSectionComponent } from './collage-section.component';

describe('CollageSectionComponent', () => {
  let component: CollageSectionComponent;
  let fixture: ComponentFixture<CollageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
