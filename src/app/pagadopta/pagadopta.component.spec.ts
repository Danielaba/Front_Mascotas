import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadoptaComponent } from './pagadopta.component';

describe('PagadoptaComponent', () => {
  let component: PagadoptaComponent;
  let fixture: ComponentFixture<PagadoptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagadoptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadoptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
