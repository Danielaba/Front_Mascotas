import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagregistroComponent } from './pagregistro.component';

describe('PagregistroComponent', () => {
  let component: PagregistroComponent;
  let fixture: ComponentFixture<PagregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
