import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JkListItemComponent } from './jk-list-item.component';

describe('JkListItemComponent', () => {
  let component: JkListItemComponent;
  let fixture: ComponentFixture<JkListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
