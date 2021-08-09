import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaganunciosComponent } from './paganuncios.component';

describe('PaganunciosComponent', () => {
  let component: PaganunciosComponent;
  let fixture: ComponentFixture<PaganunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaganunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaganunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
