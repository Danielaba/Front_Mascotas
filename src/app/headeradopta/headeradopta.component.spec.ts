import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderadoptaComponent } from './headeradopta.component';

describe('HeaderadoptaComponent', () => {
  let component: HeaderadoptaComponent;
  let fixture: ComponentFixture<HeaderadoptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderadoptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderadoptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
