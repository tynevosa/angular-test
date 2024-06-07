import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermenuComponent } from './footermenu.component';

describe('FootmenuComponent', () => {
  let component: FootermenuComponent;
  let fixture: ComponentFixture<FootermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootermenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
