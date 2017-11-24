import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewEventComponent } from './page-new-event.component';

describe('PageNewEventComponent', () => {
  let component: PageNewEventComponent;
  let fixture: ComponentFixture<PageNewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
