import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgDeatilsComponent } from './pg-deatils.component';

describe('PgDeatilsComponent', () => {
  let component: PgDeatilsComponent;
  let fixture: ComponentFixture<PgDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
