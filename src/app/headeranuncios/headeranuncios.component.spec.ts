import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderanunciosComponent } from './headeranuncios.component';

describe('HeaderanunciosComponent', () => {
  let component: HeaderanunciosComponent;
  let fixture: ComponentFixture<HeaderanunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderanunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderanunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
