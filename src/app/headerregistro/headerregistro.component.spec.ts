import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderregistroComponent } from './headerregistro.component';

describe('HeaderregistroComponent', () => {
  let component: HeaderregistroComponent;
  let fixture: ComponentFixture<HeaderregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
