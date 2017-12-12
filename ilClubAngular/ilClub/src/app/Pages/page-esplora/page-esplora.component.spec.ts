import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEsploraComponent } from './page-esplora.component';

describe('PageEsploraComponent', () => {
  let component: PageEsploraComponent;
  let fixture: ComponentFixture<PageEsploraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEsploraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEsploraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
