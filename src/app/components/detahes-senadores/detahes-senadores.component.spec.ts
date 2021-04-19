import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetahesSenadoresComponent } from './detahes-senadores.component';

describe('DetahesSenadoresComponent', () => {
  let component: DetahesSenadoresComponent;
  let fixture: ComponentFixture<DetahesSenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetahesSenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetahesSenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
