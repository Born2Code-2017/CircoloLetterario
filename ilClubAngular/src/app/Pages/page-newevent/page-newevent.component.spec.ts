import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNeweventComponent } from './page-newevent.component';

describe('PageNeweventComponent', () => {
  let component: PageNeweventComponent;
  let fixture: ComponentFixture<PageNeweventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNeweventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNeweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
