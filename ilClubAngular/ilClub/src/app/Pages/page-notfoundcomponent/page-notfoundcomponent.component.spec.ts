import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfoundcomponentComponent } from './page-notfoundcomponent.component';

describe('PageNotfoundcomponentComponent', () => {
  let component: PageNotfoundcomponentComponent;
  let fixture: ComponentFixture<PageNotfoundcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotfoundcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotfoundcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
