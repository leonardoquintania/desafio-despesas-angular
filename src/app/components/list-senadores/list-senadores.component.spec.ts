import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSenadoresComponent } from './list-senadores.component';

describe('ListSenadoresComponent', () => {
  let component: ListSenadoresComponent;
  let fixture: ComponentFixture<ListSenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
